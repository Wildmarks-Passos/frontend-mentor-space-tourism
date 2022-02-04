import React from "react"
import './Home.css'

import Header from "../../components/header/Header"

function Home (){

    return (
        <div className="body_home">
            <Header />
            <main className="main_home">
                <div className="spaceContent">
                    <span className="spaceContent_1">SO, YOU WANT TO TRAVEL TO</span>
                    <span className="spaceContent_2">SPACE</span>
                    <span className="spaceContent_3">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
                </div>
                <div>
                    <button className="btnExplore">EXPLORE</button>
                </div>
            </main>
        </div>
    )
}

export default Home