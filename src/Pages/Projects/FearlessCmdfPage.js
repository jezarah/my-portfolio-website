import React from 'react';
import ReactLogo from "../../Assets/Images/logos/React.png";
import JavaScript from "../../Assets/Images/logos/javascript.png";
import Chakra from "../../Assets/Images/logos/chakra.png";
import FearlessMobile1 from "../../Assets/Images/Fearless-Mobile1.png";
import FearlessMobile2 from "../../Assets/Images/Fearless-Mobile2.png";
import FearlessMobile3 from "../../Assets/Images/Fearless-Mobile3.png";

const FearlessCmdfPage  = () => {
    return (
        <div className="page">
            <div className="project-page">
                <div style={{display: "flex"}}>
                    <header className="page-header">
                        Fearless - cmd-f 2023
                    </header>
                </div>
                <div style={{display: "flex"}}>
                    <div className="winner-badge">
                        WINNER
                    </div>
                    <div style={{alignSelf: "center", paddingLeft: 4, fontFamily: "monospace"}}>Iris Labs: Best Figma Prototype, Diversity in CS Project Hub</div>
                </div>
                <div className="project-page-section">
                    For vulnerable individuals travelling to unfamiliar areas or walking alone at night can be an anxiety-inducing experience.
                    They may not feel comfortable contacting traditional emergency services such as 911 until it’s too late.
                    The mobile navigation app “Fearless” addresses this problem by providing a range of safety tools and resources, including fake
                    call feature, alert button, and real time information on dangerous areas, empowering vulnerable individuals to take control of
                    their safety and access the support when they need it most.
                </div>
                <div className="project-page-section" style={{paddingTop: 0}}>
                    I worked on the frontend of the project along with another team member. We used React along with the Chakra UI library
                    and Google Maps API for the navigation part of the project. This was the first Hackathon where my group moved on into the
                    second round of judging and we ended up a "winner" in two categories. However, the real win was gaining experience in
                    ideation, design, and implementation. Plus we learned new technologies like working with google maps api,
                    co:here api, and collaborating on figma with ui/ux technicalities.
                </div>
                <div className="mobile-screen-wrapper">
                    <img className="mobile-screen-img" src={FearlessMobile1} alt="Fearless Mobile"/>
                    <img className="mobile-screen-img" src={FearlessMobile3} alt="Fearless Mobile"/>
                    <img className="mobile-screen-img" src={FearlessMobile2} alt="Fearless Mobilee"/>
                </div>
                <div style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                    <div className="tech-stack-wrapper" style={{display: "flex"}}>
                        <img className="tech-stack-icon" src={JavaScript} alt="javascript icon"/>
                        <img className="tech-stack-icon" src={ReactLogo} alt="react icon"/>
                        <img className="tech-stack-icon" src={Chakra} alt="chakra ui icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FearlessCmdfPage;