import React from 'react';
import './navbar.css';
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from './MobileNavigation';
import {Outlet} from "react-router-dom";
const Navbar = () => {

    return (
        <>
            <DesktopNavigation/>
            <MobileNavigation/>
            <Outlet/>
        </>
    );
}

export default Navbar;