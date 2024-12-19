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
        <nav className="mobile-vis mobile-navbar">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
                jezarah ebel.
            </Link>
            { click ? Close : Hamburger}
            {click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
        </nav>
    );
}

export default MobileNavigation;