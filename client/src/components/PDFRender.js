import React, { useContext } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import FormContext from '../context/FormContext';


// cannot connect to review component

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

const PDFRender = () => {

    // useContext
    const { personal, education, work, projects, skills, next, prev } = useContext(FormContext);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text> {personal.fName} <br /></Text>
                    <Text> {personal.email} <br /></Text>
                    <Text> {personal.phone} <br /></Text>
                    <Text> {personal.address} <br /></Text>
                </View>
            </Page>
        </Document>
    );
}

export default PDFRender;