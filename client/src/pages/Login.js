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

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })

    const onSubmit = (data) => {
        console.log(data);
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
}

export default Login;
