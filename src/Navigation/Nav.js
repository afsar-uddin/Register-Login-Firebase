import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav = () => {
    return (
        <div className="nav-items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register" >Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="*"></NavLink>
        </div>
    );
};

export default Nav;