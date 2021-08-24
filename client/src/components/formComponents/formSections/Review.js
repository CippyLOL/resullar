import React, { useContext } from 'react';
import FormContext from '../../../context/FormContext';
import { Typography, Box, Button } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import { makeStyles } from '@material-ui/core/styles';

//  material ui styles
// const useStyles = makeStyles({
//     // root: {
//     //     maxWidth: 500,
//     //     border: '2px solid lightgray',
//     //     margin: 10,
//     // },

//     root: {
//         minWidth: '50 %',
//         padding: 3,
//     }
// });


const Review = () => {
    // useContext
    const { personal, education, work, projects, skills, next, prev } = useContext(FormContext);
    // material ui styles
    // const classes = useStyles();

    // const educationList = education.map(education =>
    //     <li key={education.id}>SchoolName: {education.schoolName}</li>);

    // console.log(education)

    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1} minWidth="80vh">

            {/* <Box> */}

            {/* Review Results */}
            <Box display="flex" flexDirection="column">
                <Typography variant="h1">
                    Review
                </Typography>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h4">
                            Personal Information
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">
                            Name: {personal.fullname} <br />
                            Email: {personal.email} <br />
                            Phone: {personal.phone} <br />
                            Address: {personal.address}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h4">
                            Education
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            education.education.map((education, index) => {
                                return (
                                    <div key={index}>
                                        <Typography variant="h5">
                                            Education {index + 1}
                                        </Typography>
                                        <Typography variant="body1">
                                            School: {education.schoolname} <br />
                                            Location: {education.location} <br />
                                            Major: {education.major} <br />
                                            Certification: {education.certification} <br />
                                            Start Year: {education.startyear} <br />
                                            End Year: {education.endyear} <br />
                                        </Typography>

                                    </div>
                                )
                            })
                        }
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h4">
                            Work Experience
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            work.work.map((work, index) => {
                                return (
                                    <div key={index}>
                                        <Typography variant="h4">
                                            Work {index + 1}
                                        </Typography>
                                        <Typography variant="body1">
                                            Company: {work.companyname} <br />
                                            Location: {work.location} <br />
                                            Job Responsibility: {work.jobrole} <br />
                                            Start Year: {work.startyear} <br />
                                            End Year: {work.endyear} <br />
                                        </Typography>
                                    </div>
                                )
                            })
                        }
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h4">
                            Projects
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            projects.projects.map((projects, index) => {
                                return (
                                    <div key={index}>
                                        <Typography variant="h4">
                                            Project {index + 1}
                                        </Typography>
                                        <Typography variant="body1">
                                            Project Name: {projects.projectname} <br />
                                            {/* Location: {projects.location} <br /> */}
                                            About Project: {projects.aboutproject} <br />
                                            Start Year: {projects.startyear} <br />
                                            End Year: {projects.endyear} <br />
                                        </Typography>
                                    </div>
                                )
                            })
                        }
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h4">
                            Skills
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            skills.skills.map((skills, index) => {
                                return (
                                    <div key={index}>
                                        <Typography variant="body1">
                                            Skill {index + 1}: {skills.skillset} <br />
                                        </Typography>
                                    </div>
                                )
                            })
                        }
                    </AccordionDetails>
                </Accordion>

                <Box m={1}>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={prev}

                    >Back</Button>
                </Box>

                <Box m={1}>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={next}
                    >Next</Button>
                </Box>







            </Box>

            {/* PDF preview */}
            <Box>
                <Typography variant="h1">
                    PDF Review
                </Typography>


            </Box>



        </Box>
    );
}

export default Review;
