import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        const linkStyle = {
            color: 'white'
        };

        return (
            <nav className="navbar bg-primary">
                <Link style={linkStyle} className="nav-link" to="/">Home</Link>
                <Link style={linkStyle} className="nav-link" to="/about-us">About Us</Link>
                <Link style={linkStyle} className="nav-link" to="/secret">Secret Docs</Link>
                <Link style={linkStyle} className="nav-link" to="/operatives-list">Operative Lists</Link>
                <button className="btn btn-outline-light">Sign In</button>                
            </nav>
        );
    };
};

export default Nav;

