import '../App.css';
import { Link } from 'react-router-dom';
import resullarLogoWhite from '../images/resullarLogoWhite.svg'
import { AuthContext } from "../context/AuthContext.js";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  let id = 1;

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
          const { verify } = require("jsonwebtoken");

          const accessToken = localStorage.getItem("accessToken");
          const validToken = verify(accessToken, "important");
        
          id = validToken.id;
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
    window.location.reload();
  };



  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <div className="navbar">
          <nav style={navStyle}>
            <img src={resullarLogoWhite} alt="Resullar Logo White" style={logo} />
            <ul style={ulStyle}>
              <Link style={navLinksStyle} to="/"> <li>Home</li> </Link>
              {!authState && (
                <>
                  <Link style={navLinksStyle} to="/login"> <li style={login}>Login</li> </Link>
                  <Link style={navLinksStyle} to="/register"> <li style={login}>Register</li> </Link>
                </>
              )}
              {authState && (
                <>
                  <Link style={navLinksStyle} to="/userform"> <li>Resume Builder</li> </Link>
                  <Link style={navLinksStyle} to={`/preview/${id}`}> <li>View Resume</li> </Link>
                  <button style={login} onClick={logout}> <li style={navLinksStyle}>Logout </li></button>
                </>
              )}

              {/* <div className="loggedInContainer">
                <h1>{authState.username} </h1>
                {authState && (
                  <>
                    <Link style={navLinksStyle} to="/userform"> <li>Resume Builder</li> </Link>
                    <Link style={navLinksStyle} to="/preview"> <li>View Resume</li> </Link>
                    <button style={login} onClick={logout}> <li style={navLinksStyle}>Logout </li></button>
                  </>
                )}
              </div> */}
            </ul>
          </nav>
        </div>
      </AuthContext.Provider>
    </div>
  );
}

//     return (

//         <nav style={navStyle}>
//             <img src={resullarLogoWhite} alt="Resullar Logo White" style={logo} />

//             <ul style={ulStyle}>

//                 <Link style={navLinksStyle} to="/">
//                     <li>Home</li>
//                 </Link>
//                 {/* PREVIOUS FORM
//                 <Link style={navLinksStyle} to="/resumebuilder">
//                     <li>Resume Builder</li>
//                 </Link> */}
//                 <Link style={navLinksStyle} to="/userform">
//                     <li>Resume Builder</li>
//                 </Link>
//                 <Link style={navLinksStyle} to="/login">
//                     <li style={login}>Login</li>
//                 </Link>
//                 <Link style={navLinksStyle} to="/register">
//                     <li style={login}>Register</li>
//                 </Link>

//             </ul>

//         </nav>

//     )
// }

export default Header;