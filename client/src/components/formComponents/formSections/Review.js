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

//  PDF render styles
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
            <Box display="flex" flexDirection="column" maxWidth="90vh" padding ={5}>
                <Typography variant="h3">
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
                                            Project Name: {projects.projectname} <br />
                                            Location: {projects.location} <br />
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
                            <BuildIcon />
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
            <Box padding ={5}>
                <Typography variant="h3">
                    PDF Preview
                </Typography>

                <PDFViewer width="300" height="480">
                    <Document>
                        <Page size="A4" style={styles.page}>
                            <View style={styles.section}>
                                <View style={styles.personal}>
                                    <Text style={styles.name}> {personal.fullname} <br /></Text>
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
                                                    <Text> {education.schoolname}<br /></Text>
                                                    <Text> {education.location} <br /></Text>
                                                </View>
                                                <View style={styles.sectionHeader}>
                                                    <Text> {education.major} | {education.certification} <br /></Text>
                                                    <Text> {education.startyear} - {education.endyear} </Text>
                                                </View>
                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header}>Work Experience</Text>
                                
                                {
                                    work.work.map((work, index) => {
                                        return (
                                            <div key={index}>
                                                <View style={styles.sectionHeader}>
                                                    <Text> {work.companyname}</Text>
                                                    <Text> {work.location}, {work.startyear} - {work.endyear}</Text>
                                                </View>
                                                <Text>Responsibilities: {work.jobrole} <br /></Text>

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
                                                    <Text> {projects.projectname}</Text>
                                                    <Text> {projects.startyear} - {projects.endyear}</Text>
                                                </View>

                                                <Text>Description: {projects.aboutproject}</Text>

                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header} >Skills</Text>
                                {
                                    skills.skills.map((skills, index) => {
                                        return (
                                            <div key={index}>
                                                <Text>- {skills.skillset}</Text>
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