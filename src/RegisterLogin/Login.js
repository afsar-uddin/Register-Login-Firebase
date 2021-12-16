import React from 'react';
import Nav from '../Navigation/Nav';

const Login = () => {
    return (
        <>
            <Nav />
            <div className='page-content'>
                <h2>Login here</h2>
                <div className='login form'>
                    <form>
                        <input type="email" placeholder='Your email' required />
                        <input type="password" placeholder='Your password' required />
                        <button>Submit</button>
                    </form>
                    <div className='or'>OR</div>
                    <div className='g-login'>
                        <button>Google Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;