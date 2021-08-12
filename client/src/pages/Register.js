import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup"
import {Grid, Container, Typography, Button} from '@material-ui/core';
import TextFieldWrapper from '../components/formComponents/formUI/TextField';
import ButtonWrapper from '../components/formComponents/formUI/Button';

function Register() {

    const initialValues = {
        username: "", password: ""
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(7).max(45).required(),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="RegisterForm">
            <Container maxWidth="md">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs ={12}>
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
                                    name="password"
                                    label="Password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldWrapper
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
            </Container>
            <br></br>

        </div>
    )
}

export default Register
