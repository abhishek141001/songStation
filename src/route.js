import React from "react";

import Header from './components/headers/header';
import Footer from './components/footer';
import {Outlet} from "react-router-dom"



function Route() {
    return (
       <>
            <Header />
            <div className="contentBody">
            <Outlet/>
            </div>

            <Footer />
        </>
        
    )
}


export default Route;