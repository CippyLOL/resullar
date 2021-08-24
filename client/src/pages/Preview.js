import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';

const Review = () => {
    let {id} = useParams();

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
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={20} minWidth="80vh">

            {/* PDF preview */}
            <Box m={10} display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={20} border={1} width={874} maxHeight={1240}>
                <div>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}><div>
                        <Typography variant="h3"> Personal Details </Typography></div>
                    </Box>

                    <Box flexDirection="row" justifyContent="left" alignItems="left" padding={1}>
                        {UserDetails.map((value, key) => {
                            return (
                                <div className="resume">
                                    <div className="body"> <p>Full Name: {value.fullname}<br /></p></div>
                                    <div className="body"> <p>Email: {value.email}<br /></p></div>
                                    <div className="body"> <p>Phone: {value.phone}<br /></p></div>
                                    <div className="body"> <p>Address: {value.address}<br /></p></div>
                                </div>
                            );
                        })}
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}><div>
                        <Typography variant="h3"> Education </Typography></div>
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
                        {Education.map((value, key) => {
                            return (
                                <div className="resume">
                                    <div className="body"> <p>School Name: {value.schoolname}<br /></p></div>
                                    <div className="body"> <p>Location: {value.location}<br /></p></div>
                                    <div className="body"> <p>Certification: {value.certification}<br /></p></div>
                                    <div className="body"> <p>Major: {value.major}<br /></p></div>
                                    <div className="body"> <p>Start Year: {value.startyear}<br /></p></div>
                                    <div className="body"> <p>End Year: {value.endyear}<br /></p></div>
                                </div>
                            );
                        })}
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}><div>
                        <Typography variant="h3"> Work </Typography></div>
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
                        {Work.map((value, key) => {
                            return (
                                <div className="resume">
                                    <div className="body"> <p>Company Name: {value.companyname}<br /></p></div>
                                    <div className="body"> <p>Location: {value.location}<br /></p></div>
                                    <div className="body"> <p>Job Role: {value.jobrole}<br /></p></div>
                                    <div className="body"> <p>Start Year: {value.startyear}<br /></p></div>
                                    <div className="body"> <p>End Year: {value.endyear}<br /><br /></p></div>
                                </div>
                            );
                        })}
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}><div>
                        <Typography variant="h3"> Projects </Typography></div>
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
                        {Projects.map((value, key) => {
                            return (
                                <div className="resume">
                                    <div className="body"> <p>Project Name: {value.projectname}<br /></p></div>
                                    <div className="body"> <p>About Project: {value.aboutproject}<br /></p></div>
                                    <div className="body"> <p>Start Year: {value.startyear}<br /></p></div>
                                    <div className="body"> <p>End Year: {value.endyear}<br /><br /></p></div>
                                </div>
                            );
                        })}
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}><div>
                        <Typography variant="h3"> Skills </Typography></div>
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
                        {Skills.map((value, key) => {
                            return (
                                <div className="resume">
                                    <div className="body"> <p>Skill: {value.skillset}<br /><br /></p></div>
                                </div>
                            );
                        })}
                    </Box>
                </div>
            </Box>
        </Box>
    );
}

export default Review;
