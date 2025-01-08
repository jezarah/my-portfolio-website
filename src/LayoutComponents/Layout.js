import React from 'react';
import Footer from "./Footer";
import DesktopNavigation from "./NavigationComponents/DesktopNavigation";
import MobileNavigation from "./NavigationComponents/MobileNavigation";
import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <DesktopNavigation/>
            <MobileNavigation/>
            <Outlet/>
            <Footer/>
        </>

    );
}

export default Layout;