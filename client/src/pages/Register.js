import React from 'react'
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { Grid, Container, Typography, Button, Box } from '@material-ui/core';
import TextFieldWrapper from '../components/formComponents/formUI/TextField';
import ButtonWrapper from '../components/formComponents/formUI/Button';
import { useHistory } from 'react-router-dom';

function Register() {

    const initialValues = {
        username: "", password: ""
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Please enter a username'),
        password: Yup.string().min(7).max(45).required(),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    let history = useHistory();

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then((response) => {
            history.push("/login");
        });
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
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h3" align="center">
                                        Account Registration
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
                                    <TextFieldWrapper
                                        type="password"
                                        name="passwordConfirmation"
                                        label="Confirm your password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <ButtonWrapper>Register</ButtonWrapper>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                    <Box m={3} />
                </Container>
            </Box>
        </div>
    )
}

export default Register
