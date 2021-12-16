import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';



const Nav = () => {
    const { user, logOut } = useAuth();
    // console.log(user)
    return (
        <div className="nav-items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register" >Register</NavLink>
            {user?.email ? <button onClick={logOut}>Logout</button> : <NavLink to="/login">Login</NavLink>}
        </div>
    );
};

export default Nav;