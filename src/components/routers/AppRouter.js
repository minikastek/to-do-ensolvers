import React,{ useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import {TodoScreen} from '../Todo/TodoScreen';
import {useDispatch} from 'react-redux';
import {firebase} from '../../firebase/firebase-config'
import { login } from '../../actions/auth';
import { PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import { loadTodos } from '../../helpers/loadTodos';
import { setTodo } from '../../actions/todo';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking,setChecking] =useState(true);

    const [isLoggedIn, setIsLoggedIn]=useState(false)

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user)=>{

            if (user?.uid){
                dispatch( login(user.uid,user.displayName));
                setIsLoggedIn(true);

                const todos = loadTodos(user.uid);
                dispatch(setTodo(todos))

            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);

        });

    }, [dispatch, setChecking, setIsLoggedIn])
    
    if (checking){

        return(
            <h1>Cargando...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    />
                    <PrivateRoute 
                        exact 
                        isAuthenticated={isLoggedIn}
                        path="/" 
                        component={TodoScreen}
                    />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>  
        </Router>
    )
}
