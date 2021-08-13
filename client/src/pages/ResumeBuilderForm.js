import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextFieldWrapper from '../components/formComponents/formUI/TextField';
import ButtonWrapper from '../components/formComponents/formUI/Button';
import { Grid, Container, Typography } from '@material-ui/core';

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

const resumeForm = {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '3rem',
};

function ResumeBuilderForm() {
    return (
        <div style={resumeForm}>
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
                                    <ButtonWrapper>Next</ButtonWrapper>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </div>
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
                                        Education
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="schoolName"
                                        label="School name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="schoolLocation"
                                        label="School location"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="major"
                                        label="Your major"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="certification"
                                        label="Certification obtained (if any)"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextFieldWrapper
                                        name="startYear"
                                        label="Start Year"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextFieldWrapper
                                        name="endYear"
                                        label="End Year"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Prev</ButtonWrapper>
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Next</ButtonWrapper>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </div>
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
                                        Work Experience
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="companyName"
                                        label="Your Company"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="workLocation"
                                        label="Work location"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextFieldWrapper
                                        name="startYear"
                                        label="Start Year"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextFieldWrapper
                                        name="endYear"
                                        label="End Year"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper multiline rows={10}
                                        name="workDescription"
                                        label="Your job role"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Prev</ButtonWrapper>
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Next</ButtonWrapper>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </div>
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
                                        Skills
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="skillName"
                                        label="Your Skill"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Prev</ButtonWrapper>
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Next</ButtonWrapper>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </div>
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
                                        Projects
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper
                                        name="projectName"
                                        label="Your Company"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextFieldWrapper
                                        name="startYear"
                                        label="Start Year"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextFieldWrapper
                                        name="endYear"
                                        label="End Year"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextFieldWrapper multiline rows={10}
                                        name="projectDescription"
                                        label="About your project"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Prev</ButtonWrapper>
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Submit</ButtonWrapper>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </div>
            </Container>
            <br></br>
        </div>
    )
}

export default ResumeBuilderForm;
