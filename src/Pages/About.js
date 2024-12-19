import React from 'react';
import Laptop from '../Assets/Images/Laptop.png';
const About  = () => {
    return (
        <div className="page">
            <div className="page-section">
                <div>
                    <div className="page-section-header" style={{paddingRight: 12}}>
                        Hi 👋, nice to meet you. My name is Jezzie, I'm an aspiring <text className="page-section-header-standout">Software Developer</text> and a graduating Computer Science student from
                        Vancouver, BC!
                    </div>
                    <div className="page-body">
                        I created this website as a fun project to showcase various work I've done throughout my studies.
                        I've included some of my favourite coursework, freelance, hackathon, and co-op projects. Please
                        feel free to take a look 👀. If you have any, I'd love to hear your thoughts or feedback!
                    </div>
                </div>
                <div className="computer-img-wrapper">
                    <img className="computer-img" src={Laptop} alt="Laptop"/>
                </div>
            </div>
        </div>
    );
};

export default About;