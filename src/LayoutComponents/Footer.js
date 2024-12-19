import React, {useState} from 'react';
import LinkedIn from '../Assets/Images/linkedin.png';
import Popup from "reactjs-popup";
import styled from 'styled-components';
import Maple from "../Assets/Images/maple.jpeg";

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-content"
  &-content {
    background: var(--background);
    border: 1px solid var(--headline);
    border-radius: 15px;
    justify-items: center;
  }
`;

const Footer = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return(
        <div className="footer">
            <h1 style={{margin: 6}}>
                © 2024 jezziecodes.com.
            </h1>
            <div style={{marginLeft: "auto", display: "grid", gridTemplateColumns: "repeat(2,1fr)"}}>
                <a href="https://www.linkedin.com/in/jezarah-ebel/" target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" height={30} width={30} style={{margin: 3}}/>
                </a>
                <div style={{margin: 3}}>
                    <button className="footer-button" onClick={() => setOpen(o => !o)}>
                        🐶
                    </button>
                </div>
                <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className='modal'>
                        <div className="modal-close-wrapper">
                            <button className="modal-close"
                                    onClick={closeModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div style={{fontFamily: "Bogart", textAlign: "center"}}>
                            Hi! I'm Maple, Jezzie's assistant!
                        </div>
                        <div>
                            <img src={Maple} alt="chihuahua puppy" className="maple"/>
                        </div>
                    </div>
                </StyledPopup>
            </div>
        </div>
    );
}

export default Footer;