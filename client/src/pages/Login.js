import React, { useState } from "react";
import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup"
import { Grid, Container, Typography, Button, Box, TextField } from '@material-ui/core';
// import TextFieldWrapper from '../components/formComponents/formUI/TextField';
// import ButtonWrapper from '../components/formComponents/formUI/Button';
import { useHistory } from 'react-router-dom';

function Login() {
    // useState
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const initialValues = {
    //     username: "", password: ""
    // };

    // const validationSchema = Yup.object().shape({
    //     username: Yup.string().required('Required'),
    //     password: Yup.string().required('Required'),
    // })

    // const onSubmit = () => {
    //     const data = { username: username, password: password };
    //     axios.post("http://localhost:3001/auth/login", data).then((response) => {
    //         if (response.data.error) {
    //             alert(response.data.error);
    //         } else {
    //             alert("Login successful");
    //             sessionStorage.setItem("accessToken", response.data);
    //             history.push("/userform");
    //         }
    //     })
    // };

    let history = useHistory();

    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                alert("Login successful");
                sessionStorage.setItem("accessToken", response.data);
                history.push("/userform");
            }
        })
    };

    const pageWrapper = {
        minHeight: "80vh", display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={pageWrapper}>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="center">
                                Login Information
                            </Typography>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <label>Username:</label>
                        </Grid> */}
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
                        {/* <Grid item xs={12}>
                            <label>Password:</label>
                        </Grid> */}
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

//         <div style={pageWrapper}>
//             <Box display="flex" justifyContent="center" alignItems="center">
//                 <Container maxWidth="md">
//                     <Formik 
//                     initialValues={initialValues} 
//                     onSubmit={onSubmit} 
//                     validationSchema={validationSchema}
//                     >
//                         <Form>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12}>
//                                     <Typography variant="h3" align="center">
//                                         Login Information
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextFieldWrapper
//                                         name="username"
//                                         label="Username"
//                                         onChange = {(event) => {
//                                             setUsername(event.target.value);
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextFieldWrapper
//                                         type="password"
//                                         name="password"
//                                         label="Password"
//                                         onChange = {(event) => {
//                                             setPassword(event.target.value);
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <ButtonWrapper>Login</ButtonWrapper>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <br></br>
//                                     Don't have an account? <br></br>
//                                     <Button href="/register" variant="contained" size="medium">
//                                         Register Now!
//                                     </Button>
//                                 </Grid>
//                             </Grid>
//                         </Form>
//                     </Formik>
//                 </Container>
//                 <br></br>

//             </Box>
//         </div>

//      )
// }

export default Login;
