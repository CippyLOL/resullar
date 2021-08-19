import React, { useContext } from 'react';
import FormContext from '../../../context/FormContext';
import { Typography, Box, Button } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import PDFRender from '../../PDFRender';
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

//  PDP render styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});


const Review = () => {
    // useContext
    const { personal, education, work, projects, skills, next, prev } = useContext(FormContext);
    // material ui styles
    // const classes = useStyles();

    // const educationList = education.map(education =>
    //     <li key={education.id}>SchoolName: {education.schoolName}</li>);

    console.log(education)

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
                            Name: {personal.fName} <br />
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
                                            School: {education.schoolName} <br />
                                            Location: {education.location} <br />
                                            Major: {education.major} <br />
                                            Certification: {education.certification} <br />
                                            Start Year: {education.startYear} <br />
                                            End Year: {education.endYear} <br />
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
                                            Company: {work.companyName} <br />
                                            Location: {work.location} <br />
                                            Job Responsibility: {work.jobRole} <br />
                                            Start Year: {work.startYear} <br />
                                            End Year: {work.endYear} <br />
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
                                            Project Name: {projects.projectName} <br />
                                            Location: {projects.location} <br />
                                            About Project: {projects.aboutProject} <br />
                                            Start Year: {projects.startYear} <br />
                                            End Year: {projects.endYear} <br />
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
                            skills.skills.map((skill, index) => {
                                return (
                                    <div key={index}>
                                        <Typography variant="body1">
                                            Skill {index + 1}: {skill} <br />
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
                    PDF Preview
                </Typography>

                <PDFViewer width="300" height="480">
                    <Document>
                        <Page size="A4" style={styles.page}>
                            <View style={styles.section}>
                                <Text> {personal.fName} <br /></Text>
                                <Text> {personal.email} <br /></Text>
                                <Text> {personal.phone} <br /></Text>
                                <Text> {personal.address} <br /></Text>
                            </View>

                            <View style={styles.section}>
                                <Text>Education</Text>
                                {
                                    education.education.map((education, index) => {
                                        return (
                                            <div key={index}>
                                                <Text> School: {education.schoolName}<br /></Text>
                                                <Text> Location: {education.location} <br /></Text>
                                                <Text> Major: {education.major} <br /></Text>
                                                <Text> Certification: {education.certification} <br /></Text>
                                                <Text> Start Year: {education.startYear} <br /></Text>
                                                <Text>End Year: {education.endYear} <br /></Text>

                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text>Work Experience</Text>
                                {
                                    work.work.map((work, index) => {
                                        return (
                                            <div key={index}>
                                                <Text>Company Name: {work.companyName}</Text>
                                                <Text>Company Location: {work.location}</Text>
                                                <Text>Job Role: {work.jobRole}</Text>
                                                <Text>Start Year: {work.startYear}</Text>
                                                <Text>End Year: {work.endYear}</Text>
                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text>Projects</Text>
                                {
                                    projects.projects.map((projects, index) => {
                                        return (
                                            <div key={index}>
                                                <Text>Project Name: {projects.projectName}</Text>
                                                <Text>About: {projects.aboutProject}</Text>
                                                <Text>Start Year: {projects.startYear}</Text>
                                                <Text>End Year: {projects.endYear}</Text>
                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text>Skills</Text>
                                {
                                    skills.skills.map((skill, index) => {
                                        return (
                                            <div key={index}>
                                                <Text>Skills: {skills.skills}</Text>
                                            </div>
                                        )
                                    })
                                }
                            </View>




                        </Page>
                    </Document>
                </PDFViewer>

            </Box>



        </Box>
    );
}

export default Review;
