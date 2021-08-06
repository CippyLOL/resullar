import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextFieldWrapper from '../components/formComponents/formUI/TextField';
import ButtonWrapper from '../components/formComponents/formUI/Button';
import { Grid, Container, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
        background: "black"
    },
    input: {
        color: "#2EFF22"
    }
};

const initialFormState = {
    fName: "",
    email: "",
    phone: "",
    address: "",
};

const formValidation = Yup.object().shape({
    fName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.number().integer().typeError('Invalid phone number').required('Required'),
    address: Yup.string().required('Required'),
});

function ResumeBuilderForm() {
    return (
        <div className="resumeForm">
            <Container maxWidth="md">
                <div className="formWrapper">
                    <Formik
                        initialValues={initialFormState}
                        validationSchema={formValidation}
                        onSubmit={values => {
                            console.log(values);
                        }}
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
                                        name="fName"
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
                                    <ButtonWrapper>Submit</ButtonWrapper>
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
