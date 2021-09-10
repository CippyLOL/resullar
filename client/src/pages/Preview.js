import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
    let { id } = useParams();

    const [UserDetails, setUserDetails] = useState([]);
    const [Education, setEducation] = useState([]);
    const [Work, setWork] = useState([]);
    const [Projects, setProjects] = useState([]);
    const [Skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/userdetails/" + id).then((response) => {
            setUserDetails(response.data);
        });
        axios.get("http://localhost:3001/schools/" + id).then((response) => {
            setEducation(response.data);
        });
        axios.get("http://localhost:3001/companies/" + id).then((response) => {
            setWork(response.data);
        });
        axios.get("http://localhost:3001/projects/" + id).then((response) => {
            setProjects(response.data);
        });
        axios.get("http://localhost:3001/skills/" + id).then((response) => {
            setSkills(response.data);
        });
    }, []);

    return (
        <div className={'preview'}>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={20} minWidth="80vh">
                <PDFViewer width="874" height="1240">
                    <Document>
                        <Page size="A4" style={styles.page}>
                            <View style={styles.section}>
                                <View style={styles.personal}>
                                    {UserDetails.map((value, key) => {
                                        return (
                                            <div>
                                                <Text style={styles.name}> {value.fullname} <br /></Text>
                                                <Text> {value.phone} | {value.address} | {value.email}</Text>
                                            </div>
                                        );
                                    })}
                                </View>

                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header}>Education</Text>
                                {
                                    Education.map((value, key) => {
                                        return (
                                            <div>
                                                <View style={styles.sectionHeader}>
                                                    <Text> {value.schoolname}<br /></Text>
                                                    <Text> {value.location} <br /></Text>
                                                    <View style={styles.sectionHeader}>
                                                        <Text> {value.major} | {value.certification} <br /></Text>
                                                        <Text> {value.startyear} - {value.endyear} </Text>
                                                    </View>
                                                </View>
                                            </div>
                                        );
                                    })}
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header}>Work Experience</Text>
                                {
                                    Work.map((value, key) => {
                                        return (
                                            <div>
                                                <View style={styles.sectionHeader}>
                                                    <Text> {value.companyname}</Text>
                                                    <Text> {value.location}, {value.startyear} - {value.endyear}</Text>
                                                </View>
                                                <Text>Responsibilities: {value.jobrole}</Text>
                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header}>Projects</Text>
                                {
                                    Projects.map((value, key) => {
                                        return (
                                            <div>
                                                <View style={styles.sectionHeader}>
                                                    <Text> {value.projectname}</Text>
                                                    <Text> {value.startyear} - {value.endyear}</Text>
                                                </View>

                                                <Text>Description: {value.aboutproject}</Text>

                                            </div>
                                        )
                                    })
                                }
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.header} > Skills</Text>
                                {
                                    Skills.map((value, key) => {
                                        return (
                                            <div>
                                                <Text>- {value.skillset}</Text>
                                            </div>
                                        )
                                    })
                                }
                            </View>
                        </Page>
                    </Document>
                </PDFViewer>
            </Box>
        </div>

    );
}

export default Review;
