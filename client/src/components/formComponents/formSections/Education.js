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
                                <FieldArray name={education}>
                                    {
                                        fieldArrayProps => {
                                            console.log('fieldArrrayProps', fieldArrayProps);
                                            const { push, remove, form } = fieldArrayProps;
                                            const { values } = form;
                                            return (
                                                <div>
                                                    {values.map((education, index) => (
                                                        <div key={index}>
                                                            <Grid item xs={12}>
                                                                <TextFieldWrapper
                                                                    name={`education[${index}].schoolName`}
                                                                    label="School name"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextFieldWrapper
                                                                    name={`education[${index}].location`}
                                                                    label="School location"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Button
                                                                    variant='contained'
                                                                    color='primary'
                                                                    fullWidth='true'
                                                                    onClick={() => remove(index)}
                                                                > - </Button>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Button
                                                                    variant='contained'
                                                                    color='primary'
                                                                    fullWidth='true'
                                                                    onClick={() => push({ id: 0, schoolName: "", location: "", })}
                                                                > + </Button>
                                                            </Grid>
                                                        </div>
                                                    ))
                                                    }
                                                </div>)
                                        }
                                    }

                                </FieldArray>
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
