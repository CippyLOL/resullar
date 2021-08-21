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
    work: Yup.array().of(
        Yup.object().shape({
            companyName: Yup.string().required('Required'),
            location: Yup.string().required('Required'),
            jobRole: Yup.string().required('Required'),
            startYear: Yup.number().integer().typeError('Invalid year').required('Required'),
            endYear: Yup.number().integer().typeError('Invalid year').required('Required'),
        })
    )
});

const resumeForm = {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '3rem',
    paddingTop: '3rem',
};



export const Work = () => {


    const { work, setWork, next, prev } = useContext(FormContext);


    return (
        <div style={resumeForm}>
            <Container maxWidth="md">
                <Formik
                    initialValues={work}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        setWork(values);
                        console.log(work);
                        next();
                        // prev();
                    }}
                    render={({ values }) => (
                        <Form>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h3">
                                        Work Experience
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">
                                        If section does not apply, delete the field and move to the next section. <br />
                                        All input fields are required.
                                    </Typography>
                                </Grid>

                                <FieldArray
                                    name="work"
                                    render={arrayHelpers => (
                                        <div>

                                            <Button
                                                fullWidth
                                                variant='contained'
                                                style={{ width: '15em', marginTop: '1em', marginBottom: '2em' }}
                                                onClick={() => arrayHelpers.push({ companyName: "", location: "", jobRole: "", startYear: "", endYear: "", })}
                                            >
                                                Add Work
                                            </Button>


                                            {
                                                values.work.map((work, index) => (
                                                    <Grid container direction="row" spacing={3} key={index}>
                                                        {/** both these conventions do the same */}
                                                        <Grid item xs={4}>
                                                            <Typography variant="h4" style={{ display: 'block', textAlign: 'left' }}>
                                                                Work Experience {index + 1}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={1} style={{ alignItem: 'left' }}>
                                                            <Button
                                                                color='secondary'
                                                                variant='contained'
                                                                onClick={() => arrayHelpers.remove(index)}>
                                                                Delete
                                                            </Button>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextFieldWrapper
                                                                name={`work.${index}.companyName`}
                                                                label="Company Name"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextFieldWrapper
                                                                name={`work.${index}.location`}
                                                                label="Company Location"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextFieldWrapper
                                                                multiline rows={10}
                                                                name={`work.${index}.jobRole`}
                                                                label="Job Role and Responsibilities"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextFieldWrapper
                                                                name={`work.${index}.startYear`}
                                                                label="Start Year"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextFieldWrapper
                                                                name={`work.${index}.endYear`}
                                                                label="End Year"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Box m={2} />
                                                        </Grid>


                                                        {/* <Button
                                                            variant='contained'
                                                            onClick={() => arrayHelpers.remove(index)}>
                                                            -
                                                        </Button> */}
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


export default Work;