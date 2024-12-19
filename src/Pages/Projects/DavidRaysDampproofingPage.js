import React from 'react';
import DRDHomePage from '../../Assets/Images/DRD-HomePage.png';
import DRDMobile1 from '../../Assets/Images/DRD-Mobile1.png';
import DRDMobile2 from '../../Assets/Images/DRD-Mobile2.png';
import DRDMobile3 from '../../Assets/Images/DRD-Mobile3.png';
import NextJs from '../../Assets/Images/logos/nextjs.png';
import Vercel from '../../Assets/Images/logos/vercel.png';
import GitLab from '../../Assets/Images/logos/gitlab.png';

const DavidRaysDampproofingPage  = () => {
    return (
        <div className="page">
            <div className="project-page">
                <header className="page-header">
                    David Ray's Dampproofing Business Website - Freelance Website (<a className="link drd-link" href="https://davidraysdampproofing.com" target="_blank" rel="noopener noreferrer">davidraysdampproofing.com</a>)
                </header>
                <div className="project-page-section">
                    David Ray's is a dampproofing company website built using Next.js.
                    I chose to utilize Next.js due to it's server-sided rendering capabilities, which allows loading times to
                    happen upfront thus providing a better user-experience while navigating the website. This was particularly beneficial
                    in this application since the design required a lot of large file size images and pdfs.
                    An additional benefit of using Next.js is the intuitive integration with Vercel. Vercel made setting up
                    the deployment pipelines easy and integrated seamlessly with GitLab, to allow for CI/CD.
                </div>
                <div className="project-img-wrapper">
                    <img className="project-img" src={DRDHomePage} alt="DavidRaysDampproofing Home Page"/>
                </div>
                <div className="project-page-section">
                    Mobile responsiveness was a high priority for this project as the client expects the typical user will access the
                    website, in particular dampproofing cost estimator and the product spec sheets, via their mobile devices. To facilitate
                    this, I used Tailwind to cut down the amount of custom css required and achieve consistent styling throughout the project.
                </div>
                <div className="mobile-screen-wrapper">
                    <img className="mobile-screen-img" src={DRDMobile1} alt="DRD Mobile Calculator Page"/>
                    <img className="mobile-screen-img" src={DRDMobile3} alt="DRD Mobile Calculator Page"/>
                    <img className="mobile-screen-img" src={DRDMobile2} alt="DRD Mobile Calculator Page"/>
                </div>
                <div style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                    <div className="tech-stack-wrapper" style={{display: "flex"}}>
                        <img className="tech-stack-icon" src={NextJs} alt="next js icon"/>
                        <img className="tech-stack-icon" src={Vercel} alt="vercel icon"/>
                        <img className="tech-stack-icon" src={GitLab} alt="gitlab icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DavidRaysDampproofingPage;