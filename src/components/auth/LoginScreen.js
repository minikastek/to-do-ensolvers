import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch,useSelector } from 'react-redux';
import { startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state=>state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'nolivera@gmail.com',
        password:'123456'
    });

    const {email,password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch( startLoginEmailPassword ( email , password ));
    }

    return (
        <div>

            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>

                <input 
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />

                <input 
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                value={password}
                onChange={handleInputChange}
                />

                <button 
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Login
                </button>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create New account
                </Link>

            </form>
        </div>
    )
}
