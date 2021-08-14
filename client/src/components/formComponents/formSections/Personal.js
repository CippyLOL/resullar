import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextFieldWrapper from '../formUI/TextField';
import ButtonWrapper from '../formUI/Button';
import { Grid, Container, Typography } from '@material-ui/core';
import FormContext from '../../../context/FormContext';

// const initialFormState = {
//     fName: "",
//     email: "",
//     phone: "",
//     address: "",
// };

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


const Personal = () => {

    // useContext
    const { personal, setPersonal, next } = useContext(FormContext);

    return (
        <div style={resumeForm}>
            <Container maxWidth="md">
                <div className="formWrapper">
                    <Formik
                        initialValues={personal}
                        validationSchema={formValidation}
                        onSubmit={(values) => {
                            setPersonal(values);
                            console.log(Personal);
                            next();
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
                                    {/* <ButtonWrapper onClick={handleSubmit}>Next</ButtonWrapper> */}
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

export default Personal;
