import React from 'react';
import SIGIF from "../../Assets/Images/SectionInsightsGIF.gif";
import ReactLogo from "../../Assets/Images/logos/React.png";
import MUI from "../../Assets/Images/logos/mui.png";
import Typescript from "../../Assets/Images/logos/typescript.png";

const SectionInsightsPage  = () => {
    return (
        <div className="page">
            <div className="project-page">
                <header className="page-header">
                    Section Insights - Term Project
                </header>
                <div className="project-page-section">
                    Section Insights is a full stack web development project for UBC's CPSC 310: Introduction to Software Engineering course
                    with the goal of this project being to enable effective querying of historical data regarding the university's sections. The backend
                    is developed using Typescript and the frontend is built in React with many components (including our charts) from the Material UI library.
                    We implemented a web server to surface our backend functionality through REST API endpoints, so that the frontend could access those
                    methods via HTTP requests utilizing express as the REST server library.
                </div>
                <div className="project-page-section" style={{paddingTop: 0}}>
                    This project served as an incredible learning opportunity in so many software engineering topics such as software testing, construction,
                    and processes. We emulated an Agile approach with weekly Scrum meetings which really helped to facilitate collaboration between
                    myself, my team member and our TA. This method coupled with regular reflection drove the quality of our resulting project.
                    We also delved into test driven development by first writing test suites using Mocha framework with Chai
                    expectations for running and asserting our tests and eventually added SuperTest to our testing library to send HTTP requests to our backend
                    endpoints. Due to the complex project specifications using test driven development was a huge benefit to our project's success.
                </div>
                <div className="project-img-wrapper" style={{margin: 2}}>
                    <img className="project-img" src={SIGIF} alt="DavidRaysDampproofing Home Page"/>
                </div>
                <div style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                    <div className="tech-stack-wrapper" style={{display: "flex"}}>
                        <img className="tech-stack-icon" src={Typescript} alt="gitlab icon"/>
                        <img className="tech-stack-icon" src={ReactLogo} alt="react icon"/>
                        <img className="tech-stack-icon" src={MUI} alt="mui icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionInsightsPage;