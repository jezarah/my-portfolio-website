import React from 'react';
import EmblaCarousel from "../CarouselComponents/EmblaCarousel";
const About  = ({skills}) => {
    const EMBLA_OPTIONS = { loop: true }

    return (
        <>
            <div className="home-page">
                <div className="page-hero-section">
                    <div>
                        <div className="page-hero-header">
                            Hello 👋, I'm <span className="page-section-header-standout">Jezzie</span>. <br/>
                            I'm a Software Developer based in
                            Vancouver, BC!
                        </div>
                        <div className="page-body">
                            Dedicated to creating functional, responsive, and aesthetic full stack web and mobile applications.
                            My aptitude for analytical problem solving is what pushed me to pursue my first degree in Engineering,
                            but I found my passion for coding and software development due to the unique combination of creativity,
                            logic, and the inherently dynamic innovation of the technology field. I'm a lifelong learner and committed
                            to seeking opportunities for growth and personal development.
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-page-no-x-padding">
                <div className="skills-header">SOME OF MY SKILLS</div>
                {skills && <EmblaCarousel slides={skills} options={EMBLA_OPTIONS}/>}
            </div>
        </>
    );
};

export default About;