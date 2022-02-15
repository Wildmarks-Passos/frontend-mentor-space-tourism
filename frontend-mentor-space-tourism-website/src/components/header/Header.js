import React from "react"
import { Link } from "react-router-dom"
import './Header.css'

import Logo from '../../assets/logo.svg'
import CloseNav from '../../assets/icon-close.svg'
import Hamburger from '../../assets/icon-hamburger.svg'

function showMenu(){
    
    let nav = document.querySelector('.nav')

    nav.classList.toggle('active')
}

function Header(){


    return (

        <header className="header">
            <img className="logo" src={Logo}></img>
            <hr />
            <img className="hamburger" onClick={showMenu} src={Hamburger}></img>
            <nav className="nav">
                <img className="closeNav" onClick={showMenu} src={CloseNav}></img>
                <Link to='/'><span>00</span>HOME</Link>
                <Link to='/Destination'><span>01</span>DESTINATION</Link>
                <Link to='/Crew'><span>02</span>CREW</Link>
                <Link to='/Technology'><span>03</span>TECHNOLOGY</Link>
            </nav>
        </header>
    )
}

export default Header