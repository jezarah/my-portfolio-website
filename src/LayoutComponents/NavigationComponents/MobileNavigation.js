import NavLinks from "./NavLinks";
import {MdOutlineMenu, MdClose} from 'react-icons/md'
import './navbar.css';
import {useState} from "react";
import {Link} from "react-router-dom";

const MobileNavigation = () =>{
    const [click, setClick] = useState(false);
    const Hamburger = <MdOutlineMenu className="hamburger-menu"
                                     size="30px" color="black" onClick={() => setClick(!click)}/>
    const Close = <MdClose className="hamburger-menu"
                           size="30px" color="black" onClick={() => setClick(!click)} />
    const closeMenu = () => setClick(false);


    return(
        <div>
            <nav className="mobile-vis mobile-navbar">
                <div className="navbar-logo-svg">
                    <svg viewBox="0 0 240 40">
                        <Link to="/">
                            <text x='0' y='30' className="navbar-logo-text">
                                &#60;jezarah ebel/&#62;
                            </text>
                        </Link>
                    </svg>
                </div>
                { click ? Close : Hamburger}
                {click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
            </nav>
        </div>
    );
}

export default MobileNavigation;