import React, { useState } from "react";
import './Technology.css'

import Header from "../../components/header/Header";
import H1_pages from "../../components/h1_pages/H1_pages";

function Technology(){

    return(

        <div className="body_technology">
            <Header />
            <main className="main_technology">
                <H1_pages number="03" text="SPACE LAUNCH 101" />
            </main>
        </div>
    )
}

export default Technology