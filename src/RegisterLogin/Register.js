import React from 'react';
import Nav from '../Navigation/Nav';

const Register = () => {
    return (
        <>
            <Nav />
            <div className='page-content'>
                <h2>Register here</h2>
                <div className='register form'>
                    <form>
                        <input type="text" placeholder='Your name' required />
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

export default Register;