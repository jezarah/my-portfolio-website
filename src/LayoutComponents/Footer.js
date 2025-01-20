import React from 'react';
import LinkedIn from '../Assets/Images/linkedin.png';
import GitHub from '../Assets/Images/github.png';

const Footer = () => {

    return(
        <div className="footer">
            <div className="content">
                <h1>
                    © 2025 jezziecodes.com
                </h1>
                <div className="footer-icons-wrapper">
                    <a href="https://github.com/jezarah" target="_blank" rel="noreferrer">
                        <img src={GitHub} alt="GitHub" height={30} width={30} className="footer-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jezarah-ebel/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" height={30} width={30} className="footer-icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;