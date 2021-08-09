import React from 'react';
import { useState } from 'react';
import { Provider } from '../context/FormContext';
import Personal from "../components/formComponents/formSections/Personal"
import Education from "../components/formComponents/formSections/Education"
import Review from "../components/formComponents/formSections/Review"

// const { Step } = Steps;

// Intialize initial state and values for each section
const personalInitialState = {
    fName: "",
    email: "",
    phone: "",
    address: "",
};

const educationInitialState = {
    education: [
        {
            id: 0, schoolName: "", location: "", major: "", certification: "", startYear: "", endYear: "",
        },
    ],
};

const renderStep = (step) => {
    switch (step) {
        case 0:
            return <Personal />;
        case 1:
            return <Education />;
        case 2:
            return <Review />;
        default:
            return null;
    };
};

const UserForm = () => {

    // setState for each form section component and step
    const [personal, setPersonal] = useState(personalInitialState);
    const [education, setEducation] = useState(educationInitialState.education);
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if (currentStep === 2) {
            setCurrentStep(0);
            setPersonal(personalInitialState);
            setEducation(educationInitialState);
            return;
        }
        setCurrentStep(currentStep + 1);
    };
    const prev = () => setCurrentStep(currentStep - 1);


    return (
        <Provider value={{ personal, setPersonal, next, prev, education, setEducation }}>
            <main>
                {renderStep(currentStep)}
            </main>
        </Provider>
    );
};

export default UserForm;
