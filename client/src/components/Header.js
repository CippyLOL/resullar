import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { withTheme } from "@material-ui/core";

function Header() {

    const navLinksStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '5vh',
        background: 'rgb(12, 24, 255)',
        color: 'white'

    };

    const ulStyle = {
        width: '55%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyle: 'none'
    };

    return (
        <nav style={navStyle}>
            <h3>Resullar</h3>
            <ul style={ulStyle}>
                <Link style={navLinksStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navLinksStyle} to="/resumebuilder">
                    <li>Resume Builder</li>
                </Link>
                <Link style={navLinksStyle} to="/login">
                    <li>Login</li>
                </Link>

            </ul>
        </nav>

    )
}

export default Header;