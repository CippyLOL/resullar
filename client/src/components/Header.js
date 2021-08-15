import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import resullarLogoWhite from '../images/resullarLogoWhite.svg'

function Header() {

    const navLinksStyle = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#00B8EE',
        color: 'white',
        height: '10vh',

    };

    const ulStyle = {
        marginLeft: '30%',
        width: '30%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyle: 'none'
    };

    const login = {
        background: '#AC00EE',
        padding: '10px',
        borderRadius: '10px',
    };

    const logo = {
        height: '50px',
        padding: '10px',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        display: 'inline-block',
        paddingBottom: '10px',
    };

    // const register = {
    //     background: '#A52A2A',
    //     padding: '10px',
    //     borderRadius: '10px',
    // }

    return (
        <nav style={navStyle}>
            {/* <h3>Resullar</h3> */}
            <img src={resullarLogoWhite} alt="Resullar Logo White" style={logo} />
            <ul style={ulStyle}>
                <Link style={navLinksStyle} to="/">
                    <li>Home</li>
                </Link>
                {/* PREVIOUS FORM
                <Link style={navLinksStyle} to="/resumebuilder">
                    <li>Resume Builder</li>
                </Link> */}
                <Link style={navLinksStyle} to="/userform">
                    <li>Resume Builder</li>
                </Link>
                <Link style={navLinksStyle} to="/login">
                    <li style={login}>Login</li>
                </Link>
                <Link style={navLinksStyle} to="/register">
                    <li style={login}>Register</li>
                </Link>

            </ul>
        </nav>

    )
}

export default Header;