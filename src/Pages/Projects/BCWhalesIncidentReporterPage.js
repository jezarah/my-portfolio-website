import React from 'react';
import Flutter from "../../Assets/Images/logos/flutter.png";
import PostgreSQL from "../../Assets/Images/logos/postgres.png";
import Python from "../../Assets/Images/logos/python.png";
import {Link} from "react-router-dom";
import BCWhalesMobile1 from "../../Assets/Images/BCWhales-Mobile1.png";
import BCWhalesMobile2 from "../../Assets/Images/BCWhales-Mobile2.png";
import BCWhalesMobile3 from "../../Assets/Images/BCWhales-Mobile3.png";
import BCWhalesMobile4 from "../../Assets/Images/BCWhales-Mobile4.png";


const BCWhalesIncidentReporterPage  = () => {
    return (
        <div className="page">
            <div className="project-page">
                <header className="page-header">
                    BC Whales Remote Report - Co-op Project
                </header>
                <div className="project-page-section">
                    From my co-op, the {<Link to="https://apps.apple.com/us/app/remote-report/id6448069694" className="link">BC Whales Remote Report App</Link>} was my favourite project to work on, not only because the app intends to aid in
                    protecting the lives of marine mammals living off our shores, it was also my first time working on a mobile application and an extremely deep
                    learning opportunity and a project that I am proud of. The app was built using Flutter, which allowed us to work on
                    both the ios and android versions simultaneously. The backend of the app was built using Python and utilized PostgreSQL for
                    the database management.
                </div>
                <div className="project-page-section" style={{paddingTop: 0}}>
                    At the time I also took on the responsibility of managing the uploading of the application into the App Store. This required learning
                    how to build the app and integrate the GitLab repository with Xcode, researching and reviewing App Store requirements and setting up TestFlight
                    so that the client could test and review our work. If you visit the App Store page,
                    I even had the chance to design the graphics that show off some of the app functionality.
                </div>
                <div className="mobile-screen-wrapper" style={{paddingTop: 2}}>
                    <img className="bc-whales-img" src={BCWhalesMobile1} alt="BC Whales"/>
                    <img className="bc-whales-img" src={BCWhalesMobile2} alt="BC Whales"/>
                    <img className="bc-whales-img" src={BCWhalesMobile3} alt="BC Whales"/>
                    <img className="bc-whales-img" src={BCWhalesMobile4} alt="BC Whales"/>
                </div>
                <div style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                    <div className="tech-stack-wrapper" style={{display: "flex"}}>
                        <img className="tech-stack-icon" src={Python} alt="python icon"/>
                        <img className="tech-stack-icon" src={Flutter} alt="flutter icon"/>
                        <img className="tech-stack-icon" src={PostgreSQL} alt="postgres icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BCWhalesIncidentReporterPage;