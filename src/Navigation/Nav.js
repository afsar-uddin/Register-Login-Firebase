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
            <NavLink to="/register" >Register</NavLink>
            {user?.email ? <button onClick={handleLogout}>Logout</button> : <NavLink to="/login">Login</NavLink>}
        </div>
    );
};

export default Nav;