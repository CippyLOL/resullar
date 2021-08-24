<<<<<<< Updated upstream
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup"
import { Grid, Container, Typography, Button, Box } from '@material-ui/core';
import TextFieldWrapper from '../components/formComponents/formUI/TextField';
import ButtonWrapper from '../components/formComponents/formUI/Button';

function Login() {

    const initialValues = {
        username: "", password: ""
    };
=======
import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Grid, Container, Typography, Button, Box, TextField } from '@material-ui/core';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
>>>>>>> Stashed changes

    let history = useHistory();

<<<<<<< Updated upstream
    const onSubmit = (data) => {
        console.log(data);
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h3" align="center">
                                        Login Information
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="username"
                                        label="Username"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        type="password"
                                        name="password"
                                        label="Password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <ButtonWrapper>Login</ButtonWrapper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box m={3} />
                                    Don't have an account?
                                    <Box m={1} />
                                    <Button href="/register" variant="contained" size="medium">
                                        Register Now!
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Container>
                <br></br>

            </Box>
        </div>

    )
=======
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="center">
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
>>>>>>> Stashed changes
}

export default Login;
