import React, { useContext } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextFieldWrapper from '../formUI/TextField';
import ButtonWrapper from '../formUI/Button';
import { Button } from '@material-ui/core';
import { Grid, Container, Typography } from '@material-ui/core';
import FormContext from '../../../context/FormContext';

// ARRAY
const validationSchema = Yup.object().shape({
    people: Yup.array().of(
        Yup.object().shape({
            schoolName: Yup.string(),
            location: Yup.string(),
            major: Yup.string(),
            certification: Yup.string(),
            startYear: Yup.number().integer().typeError('Invalid year'),
            endYear: Yup.number().integer().typeError('Invalid year'),
        })
    )
});

const formValidation = Yup.object().shape({
    schoolName: Yup.string(),
    location: Yup.string(),
    major: Yup.string(),
    certification: Yup.string(),
    startYear: Yup.number().integer().typeError('Invalid year'),
    endYear: Yup.number().integer().typeError('Invalid year'),
});

const resumeForm = {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '3rem',
};


const Education = () => {

    // useContext
    const { education, setEducation, next, prev } = useContext(FormContext);

    return (
        <div style={resumeForm}>
            <Container maxWidth="md">
                <div className="formWrapper">
                    <Formik
                        initialValues={education}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            setEducation(values);
                            console.log(Education);
                            next();
                            // prev();
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
                                        name="location"
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
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        fullWidth='true'
                                        onClick={prev}
                                    >Back</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Next</ButtonWrapper>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </div>
            </Container>
        </div>
    );
}

export default Education;
