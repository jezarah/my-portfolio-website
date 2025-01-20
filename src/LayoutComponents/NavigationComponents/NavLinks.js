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
                <span className="page-section-header-standout">&#60;</span>jezarah ebel<span className="page-section-header-standout">/&#62;</span>
            </Link>
            <div className="nav-links">
                <ul className="nav-ul">
                    <li className="mobile-vis nav-ul-li" onClick={() => isClicked && closeMenu()}>
                        <Link className="nav-ul-li-a" to="/" onClick={closeDropDownState}>Home</Link>
                    </li>
                    <li className="mobile-vis nav-ul-li" onClick={() => isClicked && closeMenu()}>
                        <Link className="nav-ul-li-a" to="/projects" onClick={closeDropDownState}>
                            Projects
                        </Link>
                    </li>
                    <li className="desktop-vis nav-ul-li" onClick={() => isClicked && closeMenu()}>
                        <Link className="nav-ul-li-a" to="/projects" onClick={closeDropDownState}>
                            Projects
                        </Link>
                    </li>
                    <div className="nav-ul-li pointer" onClick={() => changeDropDownState()}>
                        <div className="nav-ul-li-a">
                            BlogPosts
                            {!dropDownIsOpen && <MdOutlineKeyboardArrowDown/>}
                            {dropDownIsOpen && <MdOutlineKeyboardArrowUp/>}
                        </div>
                    </div>
                    {dropDownIsOpen &&
                        <div className="nav-sub-menu">
                            <div className="nav-sub-menu-group">
                                <div className="nav-sub-menu-header">Blog Posts</div>
                                <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>
                                    <Link className="nav-ul-li-a" to="/blog-posts/fullstack-template-project-tutorial-p1-database" onClick={closeDropDownState}>
                                        Full Stack Template Project Part 1: Project Set Up & Database
                                    </Link>
                                </li>
                                <li className="nav-sub-menu-item" onClick={() => isClicked && closeMenu()}>
                                    <Link className="nav-ul-li-a" to="/blog-posts/fullstack-template-project-tutorial-p2-api" onClick={closeDropDownState}>
                                        Full Stack Template Project Part 2: API Endpoints & User Authentication
                                    </Link>
                                </li>
                            </div>
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