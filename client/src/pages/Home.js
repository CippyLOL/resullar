import React from 'react';
import logo from "../images/resullarLogo.svg";
import resume from "../images/resume.jpg";
import './Home.css';

function Home() {

    return (
        <div className={'home'}>


            <section className={'mainSection'}>
                <img src={logo} alt="Resullar Logo" style={{ height: '180px', paddingBlock: '10px' }} />

                {/* <h1>What is Resullar?</h1> */}
                <h2 style={{ padding: '5%' }}>Resullar is a resume builder that provides an effective layout for job-seekers to use, enabling hiring managers to see their talents and skills in the best way possible. </h2>
            </section>

            <section className={'whySection'}>
                <div>
                    <h1>Why Resullar?</h1>
                    <p> One edge that the application has is that it accommodates job seekers of varying skill sets
                        and experiences. Our team has also seen a lack of support to those applicants whose skills
                        are more technical and less academically focused. <br /> <br />
                        Such applicants usually belong to two main collar jobs - blue collar jobs and pink collar jobs.
                        Other than white collar jobs, these other two categories cater to different roles in different
                        industries where having a degree is not always required. </p>
                </div>

                <div className={'resumeDiv'}>
                    <img src={resume} alt="Resume Example" />
                </div>

            </section>


            <section className={'collarTypesSection'}>
                <h1>What are the different types of collar jobs?</h1>
                <table>
                    <tr>
                        <th>Types</th>
                        <th>General description</th>
                    </tr>
                    <tr>
                        <td>White collar</td>
                        <td>A white-collar worker performs professional, desk, magerial or administrative work. <br />
                            The work may be done in an office or other admanistrative setting.</td>
                    </tr>
                    <tr>
                        <td>Blue collar</td>
                        <td>A blue-collar worker performs manual/physical labour. <br />
                            The work may involve skilled or unskilled labour.</td>
                    </tr>
                    <tr>
                        <td>Pink collar</td>
                        <td>A pink-collar worker performs in the service industry. <br />
                            The work involves interacting with people/customers. </td>
                    </tr>
                </table>
            </section>



        </div>
    )
}

export default Home;
