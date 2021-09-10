import React, { useContext } from 'react';
import { Typography, Box, Button, Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import editcollar from "../images/editcollar.png";
import whitecollar from "../images/whitecollar.png";
import bluecollar from "../images/bluecollar.png";
import pinkcollar from "../images/pinkcollar.png";
import './Collar.css';

const Review = () => {
    let history = useHistory();

    const Form = () => {
        history.push("/userform");
    };

    return (
        <div className={'collar'}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={1} >
            <Box padding={3}>
                    <img src={editcollar} alt="Edit" style={{ width: '1020px'}} />
                </Box>
                <Box padding={5}>
                    <Typography variant="h2">
                        Pick your job
                    </Typography>
                </Box>
                <Box padding={1}>
                    <Typography variant="h5">
                        Choose between white collar, blue collar and pink collar
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1} >
                    <Box>
                        <Box m={1} padding={5} width='400px'>
                            <Button
                                style={{ color: "#ffffff", backgroundColor: "#4ac5c6" }}
                                fullWidth
                                onClick={Form}> Select
                            </Button>
                        </Box>
                        <Box m={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                            <img src={bluecollar} alt="Resume" style={{ width: '400px', paddingBlock: '10px' }} />
                        </Box>
                    </Box>

                    <Box >
                        <Box m={1} padding={5} width='400px'>
                            <Button
                                style={{ color: "#ffffff", backgroundColor: "#4ac5c6" }}
                                fullWidth
                                onClick={Form}> Select
                            </Button>
                        </Box>
                        <Box m={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                            <img src={whitecollar} alt="Resume" style={{ width: '400px', paddingBlock: '10px' }} />
                        </Box>
                    </Box>

                    <Box>
                        <Box m={1} padding={5} width='400px'>
                            <Button
                                style={{ color: "#ffffff", backgroundColor: "#4ac5c6" }}
                                fullWidth
                                onClick={Form}> Select
                            </Button>
                        </Box>
                        <Box m={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                            <img src={pinkcollar} alt="Resume" style={{ width: '400px', paddingBlock: '10px' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>

    );
}

export default Review;