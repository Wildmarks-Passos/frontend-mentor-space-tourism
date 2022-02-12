import React from "react";
import './Destination_menu.css'

function Destination_menu(props){

    return(

        <ul className="destination_menu">
            <li className={props.selected == 'moon' ? "selected" : ""} 
                onClick={props.onClick} 
                destination={'moon'} 
                key={1}>MOON</li>

            <li className={props.selected == 'mars' ? "selected" : ""} 
                onClick={props.onClick} 
                destination={'mars'} 
                key={2}>MARS</li>

            <li className={props.selected == 'europa' ? "selected" : ""} 
                onClick={props.onClick} 
                destination={'europa'} 
                key={3}>EUROPA</li>

            <li className={props.selected == 'titan' ? "selected" : ""} 
                onClick={props.onClick} 
                destination={'titan'} 
                key={4}>TITAN</li>
        </ul>
    )
}

export default Destination_menu