import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import Nav from '../Navigation/Nav';

const Register = () => {
    const { registerUser, googleLogin, user, authError } = useAuth();
    console.log(user)
    const location = useLocation();
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    };
    const handleSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('password not matched');
            return;
        }
        registerUser(registerData.name, registerData.email, registerData.password, navigate);
        e.preventDefault();
    }


    const handleLogin = () => {
        googleLogin(location, navigate);
    }

    return (
        <>
            <Nav />
            <div className='page-content'>
                <h2>Register here</h2>
                <div className='register form'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onBlur={handleOnBlur} name="name" placeholder='Your name' required />
                        <input type="email" onBlur={handleOnBlur} name="email" placeholder='Your email' required />
                        <input type="password" onBlur={handleOnBlur} name="password" placeholder='Your password' required />
                        <input type="password" onBlur={handleOnBlur} name="password2" placeholder='Confirm your password' required />
                        <input type="submit" value="submit" />
                    </form>
                    {authError === 'Firebase: Error (auth/email-already-in-use).' ? <span className='error'>'Email already exist, please try with new email address'</span> : ''}
                    <div className='or'>OR</div>
                    <div className='g-login'>
                        <button onClick={handleLogin}>Google Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;