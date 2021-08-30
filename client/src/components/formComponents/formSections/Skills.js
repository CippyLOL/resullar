import React, { useContext } from 'react';
import axios from 'axios';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextFieldWrapper from '../formUI/TextField';
import ButtonWrapper from '../formUI/Button';
import { Button } from '@material-ui/core';
import { Grid, Container, Typography, Box } from '@material-ui/core';
import FormContext from '../../../context/FormContext';


// // ARRAY
const validationSchema = Yup.object().shape({
    skills: Yup.array().of(
        Yup.object().shape({
            skillset: Yup.string(),
        })
    )
});

// const validationSchema = Yup.object().shape({
//     skills: Yup.array().of(Yup.string())
// });

const resumeForm = {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '3rem',
    paddingTop: '3rem',
};



export const Skills = () => {


    const { skills, setSkills, next, prev } = useContext(FormContext);


    return (
        <div style={resumeForm}>
            <Container maxWidth="md">
                <Formik
                    initialValues={skills}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        setSkills(values);
                        next();
                        // prev();
                    }}
                    render={({ values }) => (
                        <Form>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h3">
                                        Skills
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">
                                        If section does not apply, delete the field and move to the next section. <br />
                                        All input fields are required.
                                    </Typography>
                                </Grid>

                                <FieldArray
                                    name="skills"
                                    render={arrayHelpers => (
                                        <div style={{ paddingBottom: '2em' }}>

                                            <Button
                                                fullWidth
                                                variant='contained'
                                                style={{ width: '15em', marginTop: '1em', marginBottom: '2em' }}
                                                onClick={() => arrayHelpers.push({ skillset: "" })}
                                            >
                                                Add Skill
                                            </Button>


                                            {
                                                values.skills.map((skills, index) => (
                                                    <Grid container direction="row" spacing={3} key={index}>
                                                        {/** both these conventions do the same */}
                                                        <Grid item xs>
                                                            <Typography variant="h4" >
                                                                Skill {index + 1}
                                                            </Typography>
                                                        </Grid>

                                                        <Grid item xs={8}>
                                                            <TextFieldWrapper
                                                                name={`skills.${index}.skillset`}
                                                                label="Skill"
                                                            />
                                                        </Grid>
                                                        <Grid item xs>
                                                            <Button
                                                                color='secondary'
                                                                variant='contained'
                                                                onClick={() => arrayHelpers.remove(index)}>
                                                                Delete
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                ))}

                                        </div>
                                    )}
                                />


                                {/* 
                                <Grid item xs={5}>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        fullWidth
                                        onClick={prev}
                                    >Back</Button>
                                </Grid>
                                <Grid item xs={5}>

                                </Grid> */}
                                {/* <Grid item xs={12}>
                                    <Box m={1} />
                                </Grid> */}


                                <Grid item xs={12}>
                                    <Box display="flex" justifyContent="space-between" >
                                        <Button

                                            variant='contained'
                                            color='primary'
                                            fullWidth
                                            onClick={prev}
                                        >Back</Button>
                                        <ButtonWrapper>Review Sections</ButtonWrapper>
                                    </Box>
                                </Grid>

                            </Grid>



                        </Form>
                    )}
                />
            </Container>

        </div>
    );
}


export default Skills;