<<<<<<< Updated upstream
import React, { Component } from 'react';
=======
import React from 'react';
>>>>>>> Stashed changes
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextFieldWrapper from '../components/formComponents/formUI/TextField';
import ButtonWrapper from '../components/formComponents/formUI/Button';
import { Grid, Container, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const initialFormState = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
};

const formValidation = Yup.object().shape({
    fullname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.number().integer().typeError('Invalid phone number').required('Required'),
    address: Yup.string().required('Required'),
});

const resumeForm = {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '3rem',
};

function ResumeBuilderForm() {  
    let history = useHistory();

    const onSubmit = (data) => {
<<<<<<< Updated upstream
        axios.post("http://localhost:3001/resumebuilder", data).then((response) => {
            history.push("/preview");
=======
        axios.post("http://localhost:3001/resumebuilder", 
        data, 
        {
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }
        ).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                history.push("/preview");
            }
>>>>>>> Stashed changes
        });
    };

    return (
        <div style={resumeForm}>
            <Container maxWidth="md">
                <div className="formWrapper">
                    <Formik
                        initialValues={initialFormState}
                        validationSchema={formValidation}
<<<<<<< Updated upstream
                        onSubmit={onSubmit} 
=======
                        onSubmit={onSubmit}
>>>>>>> Stashed changes
                    >
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h3">
                                        Personal Information
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="fullname"
                                        label="Full Name"
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextFieldWrapper
                                        name="email"
                                        label="Your email"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextFieldWrapper
                                        name="phone"
                                        label="Your phone number"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="address"
                                        label="Your address"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <ButtonWrapper>Next</ButtonWrapper>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </div>
            </Container>
        </div>
    )
}

export default ResumeBuilderForm;