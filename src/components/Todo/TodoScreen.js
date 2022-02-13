import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import {todoReducer} from './TodoReducer'
import { startLogout } from '../../actions/auth';

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoScreen = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [ {description}, handleInputChange, reset] = useForm({
        description:''
    });

    useEffect( () => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        
        dispatch(action);
    }

    const handleToggle = (todoId) =>{

        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().lenght <=1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (

        <div className="todos__main-content">
            <div className='todos__box-container'>
                <h1 className='todos__entry-title' >To-Do list
                    ({todos.length}) 
                </h1>
                <div className='todos__logout'>   
                    <button
                        className="btn-primary"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div> 
                <hr />

                <div className="row">
                    <div className="col-7">

                        <TodoList
                            todos={todos}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />

                    </div>

                    <div className="col-5">
                        <h4> Add new to-Do </h4>

                        <hr/>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Write the new to-Do !"
                                autoComplete="off"
                                onChange={ handleInputChange }
                            />

                            <button
                                type="submit"
                                className="btn-primary mt-2 btn-block"
                            >
                                Add
                            </button>
                        </form> 

                    </div>
                </div>
            </div>
        </div>
  )
}
