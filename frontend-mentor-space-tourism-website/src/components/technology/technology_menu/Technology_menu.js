import React from "react";
import './Technology_menu.css'

function Technology_menu(props){

    return(

        <ul className="menu_tech">
            <li name='l_vehicle' 
                className={props.selected == 'l_vehicle' ? 'selected' : ''} 
                key={1} 
                onClick={props.onClick} >
                1
            </li>
            <li name='spaceport' 
                className={props.selected == 'spaceport' ? 'selected' : ''} 
                key={2} 
                onClick={props.onClick}>
                2
            </li>
            <li name='space_capsule' 
                className={props.selected == 'space_capsule' ? 'selected' : ''} 
                key={3} 
                onClick={props.onClick}>
                3
            </li>
        </ul>
    )
}

export default Technology_menu