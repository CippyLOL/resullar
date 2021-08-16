import React from 'react';
import { useState } from 'react';
import { Provider } from '../context/FormContext';
import { withRouter } from 'react-router-dom';
import Personal from "../components/formComponents/formSections/Personal"
import Education from "../components/formComponents/formSections/Education"
import Work from "../components/formComponents/formSections/Work"
import Projects from "../components/formComponents/formSections/Projects"
import Skills from "../components/formComponents/formSections/Skills"
import Review from "../components/formComponents/formSections/Review"


// const { Step } = Steps;

// Intialize initial state and values for each section
const personalInitialState = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
};

const educationInitialState = {
    education: [
        {
            schoolName: "", location: "", major: "", certification: "", startYear: "", endYear: "",
        },


    ]
};

const workInitialState = {
    work: [
        {
            companyName: "", location: "", jobRole: "", startYear: "", endYear: "",
        },


    ]
};

const projectsInitialState = {
    projects: [
        {
            projectName: "", aboutProject: "", startYear: "", endYear: "",
        },


    ]
};

const skillsInitialState = {
    skills: [""]
};


const renderStep = (step) => {
    switch (step) {
        case 0:
            return <Personal />;
        case 1:
            return <Education />;
        case 2:
            return <Work />;
        case 3:
            return <Projects />;
        case 4:
            return <Skills />;
        case 5:
            return <Review />;
        default:
            return null;
    };
};

const UserForm = () => {

    // setState for each form section component and step
    const [personal, setPersonal] = useState(personalInitialState);
    const [education, setEducation] = useState(educationInitialState);
    const [work, setWork] = useState(workInitialState);
    const [projects, setProjects] = useState(projectsInitialState);
    const [skills, setSkills] = useState(skillsInitialState);
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if (currentStep === 5) {
            setCurrentStep(0);
            setPersonal(personalInitialState);
            setEducation(educationInitialState);
            setWork(workInitialState);
            setProjects(projectsInitialState);
            setSkills(skillsInitialState);
            return;
        }
        setCurrentStep(currentStep + 1);
    };
    const prev = () => setCurrentStep(currentStep - 1);

    return (
        <Provider value={{ personal, setPersonal, next, prev, education, setEducation, work, setWork, projects, setProjects, skills, setSkills }}>
            <main>
                {renderStep(currentStep)}
            </main>
        </Provider>
    );
};

export default withRouter(UserForm);
