import React from 'react';
import logo from "../images/resullar.png";
import './Home.css';

function Home() {

    return (
        <div>
            <img src={logo} alt="Resullar Logo" />
            
            <h1>What is Resullar?</h1>
            <p>Resullar is a resume builder that provides an effective layout for users to use, which will 
                enable hiring managers to see their talents and skills in the best way possible. </p>
                
            <h1>Why Resullar?</h1> 
            <p> One edge that the application has is that it accommodates job seekers of varying skill sets 
                and experiences. Our team has also seen a lack of support to those applicants whose skills 
                are more technical and less academically focused. 
                Such applicants usually belong to two main collar jobs - blue collar jobs and pink collar jobs. 
                Other than white collar jobs, these other two categories cater to different roles in different 
                industries where having a degree is not always required. </p>
            
            <h1>What are the different types of collar jobs?</h1>
            <table>
                <tr>
                    <th>Types</th>
                    <th>General description</th>
                </tr>
                <tr>
                    <td>White collar</td>
                    <td>A white-collar worker performs professional, desk, magerial or administrative work. 
                        The work may be done in an office or other admanistrative setting.</td>
                </tr>
                <tr>
                    <td>Blue collar</td>
                    <td>A blue-collar worker performs manual/physical labour. 
                        The work may involve skilled or unskilled labour.</td>
                </tr>
                <tr>
                    <td>Pink collar</td>
                    <td>A pink-collar worker performs in the service industry. 
                        The work involves interacting with people/customers. </td>
                </tr>
            </table>


        </div>
    )
}

export default Home;
