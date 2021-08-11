import React from 'react';

const footerStyle = {
    backgroundColor: '#00B8EE',
    height: '15vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',

}

const Footer = () => {
    return (
        <div style={footerStyle}>
            <h4>Created by UOL (Goldsmith) Computer Science - Agile Team 54</h4>
            <a href="https://github.com/CippyLOL/resullar" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>GitHub</a>
        </div>
    );
}

export default Footer;
