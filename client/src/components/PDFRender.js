import React, { useContext } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import FormContext from '../context/FormContext';


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
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
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>{personal.fName}</Text>
                </View>
            </Page>
        </Document>
    );
}

export default PDFRender;
