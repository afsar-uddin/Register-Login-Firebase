import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
    const { user, logOut } = useAuth();
    let navigate = useNavigate();
    // console.log(user)
    const handleLogout = () => {
        logOut();
        navigate('/')
    }
    return (
        <div className="nav-items">
            <NavLink to="/">Home</NavLink>
            {user?.email ? <a>
                <button onClick={handleLogout}>Logout</button></a> : <span><NavLink to="/register">Register</NavLink><NavLink to="/login">Login</NavLink></span>}
        </div>
    );
};

export default Nav;