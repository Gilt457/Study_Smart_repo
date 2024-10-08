import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    );
}

export default Header;

