import React, { useContext } from 'react';
import FormContext from '../../../context/FormContext';

const Review = () => {
    // useContext
    const { personal, education, next, prev } = useContext(FormContext);
    return (
        <div>
            <h1>Review</h1>
            <p>name: {personal.fName}</p>
            <p>email: {personal.email}</p>
            <p>phone: {personal.phone}</p>
            <p>address: {personal.address}</p>

            <br />

            <p>School Name: {education.schoolName}</p>
        </div>
    );
}

export default Review;
