import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Nav from '../Navigation/Nav';

const Login = () => {
    const { googleLogin, loginEmailPassword } = useAuth();
    const [loginData, setLoginData] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginDataSubmit = e => {
        loginEmailPassword(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleLogin = () => {
        googleLogin(location, navigate);
    }
    return (
        <>
            <Nav />
            <div className='page-content'>
                <h2>Login here</h2>
                <div className='login form'>
                    <form onSubmit={handleLoginDataSubmit}>
                        <input type="email" onBlur={handleOnBlur} name="email" placeholder='Your email' required />
                        <input type="password" onBlur={handleOnBlur} name="password" placeholder='Your password' required />
                        <input type="submit" value="Submit" />
                    </form>
                    <div className='or'>OR</div>
                    <div className='g-login'>
                        <button onClick={handleLogin}>Google Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;