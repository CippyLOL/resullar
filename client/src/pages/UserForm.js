import React from 'react';
import { useState } from 'react';
import { Provider } from '../context/FormContext';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import Personal from "../components/formComponents/formSections/Personal"
import Education from "../components/formComponents/formSections/Education"
import Work from "../components/formComponents/formSections/Work"
import Projects from "../components/formComponents/formSections/Projects"
import Skills from "../components/formComponents/formSections/Skills"
import Review from "../components/formComponents/formSections/Review"



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
            schoolname: "", location: "", major: "", certification: "", startyear: "", endyear: "",
        },


    ]
};

const workInitialState = {
    work: [
        {
            companyname: "", location: "", jobrole: "", startyear: "", endyear: "",
        },


    ]
};

const projectsInitialState = {
    projects: [
        {
            projectname: "", aboutproject: "", startyear: "", endyear: "",
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

<<<<<<< Updated upstream
=======
    const {verify} = require("jsonwebtoken");

    const accessToken = localStorage.getItem("accessToken");
    const validToken = verify(accessToken, "important");


    let userdata = {
        fullname: personal.fullname,
        email: personal.email,
        phone: personal.phone,
        address: personal.address
    };

    let history = useHistory();

>>>>>>> Stashed changes
    const next = () => {
        let id = validToken.id;

        if (currentStep === 5) {
<<<<<<< Updated upstream
=======
            axios.post("http://localhost:3001/userdetails/" + id, userdata).then((response) => {
                console.log("inserted");
            });

            education.education.forEach(function (schooldata, index) {
                axios.post("http://localhost:3001/schools/" + id, schooldata).then((response) => {
                    console.log("inserted");
                });
            });

            work.work.forEach(function (workdata, index) {
                axios.post("http://localhost:3001/companies/" + id, workdata).then((response) => {
                    console.log("inserted");
                });
            });

            projects.projects.forEach(function (projectdata, index) {
                axios.post("http://localhost:3001/projects/" + id, projectdata).then((response) => {
                    console.log("inserted");
                });
            });

            skills.skills.forEach(function (skilldata, index) {
                axios.post("http://localhost:3001/skills/" + id, skilldata).then((response) => {
                    console.log(skilldata);
                });
            });

>>>>>>> Stashed changes
            setCurrentStep(0);
            setPersonal(personalInitialState);
            setEducation(educationInitialState);
            setWork(workInitialState);
            setProjects(projectsInitialState);
            setSkills(skillsInitialState);
<<<<<<< Updated upstream
=======
            window.location.reload();
            history.push("/preview/" + id);

>>>>>>> Stashed changes
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
