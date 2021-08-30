import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Grid, Container, Typography, Button, Box, TextField } from '@material-ui/core';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    const login = () => {
        const data = { username: username, password: password };

        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                localStorage.setItem("accessToken", response.data);
                window.location.reload();
                history.push("/");
            }
        })
    };

    const pageWrapper = {
        minHeight: "80vh", display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div className="loginContainer" style={pageWrapper}>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="center" font='Helvetica'>
                                Login Information
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth="true"
                                type="text"
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth="true"
                                type="password"
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                color='primary'
                                fullWidth
                                onClick={login}> Login </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Box m={2} />
                            Don't have an account?
                            <Box m={2} />
                            <Button href="/register" variant="contained" size="medium">
                                Register Now!
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default Login;
