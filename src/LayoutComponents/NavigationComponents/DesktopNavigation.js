import NavLinks from "./NavLinks";
import './navbar.css';

const DesktopNavigation = () =>{
    return(
        <nav className="desktop-vis desktop-navbar">
            <div className="content">
                <NavLinks />
            </div>
        </nav>
    );
}

export default DesktopNavigation;