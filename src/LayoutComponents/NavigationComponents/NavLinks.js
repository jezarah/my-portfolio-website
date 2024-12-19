import './navbar.css';
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
const NavLinks = ({isClicked, closeMenu}) => {
    const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
    function changeDropDownState () {
        setDropDownIsOpen(!dropDownIsOpen);
    }
    function closeDropDownState () {
        setDropDownIsOpen(false);
    }

    return(
        <>
            <Link to="/" className="desktop-vis navbar-logo" onClick={closeDropDownState}>
                jezarah ebel.
            </Link>
            <div className="nav-links">
                <ul className="nav-ul">
                    <li className="mobile-vis nav-ul-li" onClick={() => isClicked && closeMenu()}>
                        <Link className="nav-ul-li-a" to="/" onClick={closeDropDownState}>Home</Link>
                    </li>
                    <li className="nav-ul-li pointer" onClick={() => changeDropDownState()}>
                        <text className="nav-ul-li-a">
                            Explore
                            {!dropDownIsOpen && <MdOutlineKeyboardArrowDown/>}
                            {dropDownIsOpen && <MdOutlineKeyboardArrowUp/>}
                        </text>
                    </li>
                    {dropDownIsOpen &&
                        <div className="nav-sub-menu">
                            <div className="nav-sub-menu-group">
                                <div className="nav-sub-menu-header">My Projects</div>
                                <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>
                                    <Link className="nav-ul-li-a" to="/projects/sections-insight-term-project" onClick={closeDropDownState}>Section Insights, Term Project</Link>
                                </li>
                                <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>
                                    <Link className="nav-ul-li-a" to="projects/david-rays-damproofing-website" onClick={closeDropDownState}>David Ray's Dampproofing Website, Freelance Project</Link>
                                </li>
                                <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>
                                    <Link className="nav-ul-li-a" to="projects/bcwhales-incident-reporter-app" onClick={closeDropDownState}>BCWhales Remote Report App, Co-op Project</Link>
                                </li>
                                <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>
                                    <Link className="nav-ul-li-a" to="projects/fearless-cmdf-hackathon-project" onClick={closeDropDownState}>Fearless, cmd-f Hackathon Project</Link>
                                </li>
                            </div>
                            {/** TODO: BLOG POSTS**/}
                            {/*<div className="nav-sub-menu-group">*/}
                            {/*    <div className="nav-sub-menu-header">Blog Posts</div>*/}
                            {/*    <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>*/}
                            {/*        <Link className="nav-ul-li-a" to="/" onClick={closeDropDownState}>Responsive Navigation in React</Link>*/}
                            {/*    </li>*/}
                            {/*    <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>*/}
                            {/*        <Link className="nav-ul-li-a" to="/" onClick={closeDropDownState}>Create a Contact Form using Mailgun</Link>*/}
                            {/*    </li>*/}
                            {/*    <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>*/}
                            {/*        <Link className="nav-ul-li-a" to="/" onClick={closeDropDownState}>Improve SEO using Metadata</Link>*/}
                            {/*    </li>*/}
                            {/*    <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>*/}
                            {/*        <Link className="nav-ul-li-a" to="/" onClick={closeDropDownState}>*/}
                            {/*            Create a Simple Fullstack Template Part 1. Database*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>*/}
                            {/*        <Link className="nav-ul-li-a" to="/" onClick={closeDropDownState}>*/}
                            {/*            Create a Simple Fullstack Template Part 2. API*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*    <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>*/}
                            {/*        <Link className="nav-ul-li-a" to="/" onClick={closeDropDownState}>*/}
                            {/*            Create a Simple Fullstack Template Part 3. Frontend*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*</div>*/}
                        </div>
                    }
                    <li className="mobile-vis nav-ul-li" onClick={() => isClicked && closeMenu()}>
                        <Link className="nav-ul-li-a" to="/contact-me" onClick={closeDropDownState}>Contact Me</Link>
                    </li>
                </ul>
            </div>
            <div className="desktop-vis desktop-contact-button-wrapper">
                <Link className="responsive-button" to="/contact-me" onClick={closeDropDownState}>Contact Me</Link>
            </div>
        </>
    )
}

export default NavLinks;