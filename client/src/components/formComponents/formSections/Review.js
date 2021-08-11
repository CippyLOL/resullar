import React, { useContext } from 'react';
import FormContext from '../../../context/FormContext';

const Review = () => {
    // useContext
    const { personal, education, next, prev } = useContext(FormContext);

    // const educationList = education.map(education =>
    //     <li key={education.id}>SchoolName: {education.schoolName}</li>);

    console.log(education)

    return (
        <div>
            <h1>Review</h1>
            <p>name: {personal.fName}</p>
            <p>email: {personal.email}</p>
            <p>phone: {personal.phone}</p>
            <p>address: {personal.address}</p>

            <br />

            <div>
                {
                    education.education.map((education, index) => {
                        return (
                            <div key={index}>
                                <h1>Education {index + 1}</h1>
                                <h2>{education.schoolName} </h2>

                                <hr />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Review;
