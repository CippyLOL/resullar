import React, { useContext } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextFieldWrapper from '../formUI/TextField';
import ButtonWrapper from '../formUI/Button';
import { Button } from '@material-ui/core';
import { Grid, Container, Typography, Box } from '@material-ui/core';
import FormContext from '../../../context/FormContext';


// ARRAY
const validationSchema = Yup.object().shape({
    education: Yup.array().of(
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

const resumeForm = {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '3rem',
};



export const Test = () => {
    const { education, setEducation, next, prev } = useContext(FormContext);
    return (
        <div style={resumeForm}>
            <Container maxWidth="md">
                <Formik
                    initialValues={education}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        setEducation(values);
                        console.log(education);
                        next();
                        // prev();
                    }}
                    render={({ values }) => (
                        <Form>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h3">
                                        Education
                                    </Typography>
                                </Grid>

                                <FieldArray
                                    name="education"
                                    render={arrayHelpers => (
                                        <div>
                                            <Button
                                                variant='contained'
                                                onClick={() => arrayHelpers.push({ schoolName: "", location: "", major: "", certification: "", startYear: "", endYear: "", })}
                                            >
                                                +
                                            </Button>
                                            {
                                                values.education.map((education, index) => (
                                                    <Grid container direction="row" spacing={3} key={index}>
                                                        {/** both these conventions do the same */}
                                                        <Grid item xs={12}>
                                                            <Typography variant="h4">
                                                                Education {index + 1}
                                                            </Typography>
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <TextFieldWrapper
                                                                name={`education.${index}.schoolName`}
                                                                label="School name"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextFieldWrapper
                                                                name={`education.${index}.location`}
                                                                label="School location"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextFieldWrapper
                                                                name={`education.${index}.major`}
                                                                label="Major"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextFieldWrapper
                                                                name={`education.${index}.certification`}
                                                                label="Certification obtained"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextFieldWrapper
                                                                name={`education.${index}.startYear`}
                                                                label="Start year"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextFieldWrapper
                                                                name={`education.${index}.endYear`}
                                                                label="End year"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Box m={2} />
                                                        </Grid>


                                                        <Button
                                                            variant='contained'
                                                            onClick={() => arrayHelpers.remove(index)}>
                                                            -
                                                        </Button>
                                                    </Grid>
                                                ))}

                                        </div>
                                    )}
                                />

                                <Grid item xs={6}>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        fullWidth
                                        onClick={prev}
                                    >Back</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonWrapper>Next</ButtonWrapper>
                                </Grid>

                            </Grid>



                        </Form>
                    )}
                />
            </Container>

        </div>
    );
}


export default Test;
