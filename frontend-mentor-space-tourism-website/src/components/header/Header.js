import React, { useState } from "react"
import { Link } from "react-router-dom"
import './Header.css'

import Logo from '../../assets/logo.svg'
import CloseNav from '../../assets/icon-close.svg'
import Hamburger from '../../assets/icon-hamburger.svg'

function showMenu(){
    
    let nav = document.querySelector('.nav')

    nav.classList.toggle('active')
}

function Header(props){

    return (

        <header className="header">
            <img className="logo" src={Logo}></img>
            <hr />
            <img className="hamburger" onClick={showMenu} src={Hamburger}></img>
            <nav className="nav">
                <img className="closeNav" onClick={showMenu} src={CloseNav}></img>
                <Link className={props.page == 'home' ? 'selected' : ''} to='/'><span>00</span>HOME</Link>
                <Link className={props.page == 'destination' ? 'selected' : ''} to='/Destination'><span>01</span>DESTINATION</Link>
                <Link className={props.page == 'crew' ? 'selected' : ''} to='/Crew'><span>02</span>CREW</Link>
                <Link className={props.page == 'technology' ? 'selected' : ''} to='/Technology'><span>03</span>TECHNOLOGY</Link>
            </nav>
        </header>
    )
}

export default Header