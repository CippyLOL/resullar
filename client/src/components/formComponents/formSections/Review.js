import React, { useContext } from 'react';
import FormContext from '../../../context/FormContext';
import { Typography, Box, Button, Grid } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import PDFRender from '../../PDFRender';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import BuildIcon from '@material-ui/icons/Build';
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
        margin: 5,
        padding: 5,
        // flexGrow: .5
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    personal: {
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
        paddingBottom: '10px'
    },
    name: {
        fontSize: 30,
        textTransform: 'capitalize',
    },
    header: {
        fontSize: 24,
        color: '#191970',
        borderBottomWidth: 0.5,
        borderBottomColor: '#112131',
        borderBottomStyle: 'dotted',
        marginBottom: '15px',
        fontWeight: 'extrabold',
    },

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
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1} >

            {/* <Box> */}

            {/* Review Results */}
            <Box display="flex" flexDirection="column" maxWidth="90vh">
                <Typography variant="h1">
                    Review
                </Typography>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h4">
                            <PersonIcon />
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
                            <SchoolIcon />
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
                            <WorkIcon />
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
                            <GroupWorkIcon />
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
                            <BuildIcon />
                            Skills
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            skills.skills.map((skill, index) => {
                                return (
                                    <div key={index}>
                                        <Typography variant="body1">
                                            {index + 1}:{skill}
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
                                <View style={styles.personal}>
                                    <Text style={styles.name}> {personal.fName} <br /></Text>
                                    <Text> {personal.phone} | {personal.address} | {personal.email}</Text>
                                </View>
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header}>Education</Text>
                                {
                                    education.education.map((education, index) => {
                                        return (
                                            <div key={index}>
                                                <View style={styles.sectionHeader}>
                                                    <Text> {education.schoolName}<br /></Text>
                                                    <Text> {education.location} <br /></Text>
                                                </View>
                                                <View style={styles.sectionHeader}>
                                                    <Text> {education.major} | {education.certification} <br /></Text>
                                                    <Text> {education.startYear} - {education.endYear} </Text>
                                                </View>
                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header}>Work Experience</Text>

                                {/*
                                <Image
                                src="../../../images/resume.jpg"
                                />
                                 <Typography><WorkIcon /></Typography>
                                <Text><WorkIcon /></Text>
                                <Text><Typography><WorkIcon /></Typography></Text> 
                                */}
                                
                                {
                                    work.work.map((work, index) => {
                                        return (
                                            <div key={index}>
                                                <View style={styles.sectionHeader}>
                                                    <Text> {work.companyName}</Text>
                                                    <Text> {work.location}, {work.startYear} - {work.endYear}</Text>
                                                </View>
                                                <Text>Responsibilities: {work.jobRole} <br /></Text>

                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header}>Projects</Text>
                                {
                                    projects.projects.map((projects, index) => {
                                        return (
                                            <div key={index}>
                                                <View style={styles.sectionHeader}>
                                                    <Text> {projects.projectName}</Text>
                                                    <Text> {projects.startYear} - {projects.endYear}</Text>
                                                </View>

                                                <Text>Description: {projects.aboutProject}</Text>

                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header} >Skills</Text>
                                {
                                    skills.skills.map((skill, index) => {
                                        return (
                                            <div key={index}>
                                                <Text>· {skill}</Text>
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
