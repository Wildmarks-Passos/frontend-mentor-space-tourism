import React from "react";
import './Destination_img.css'

function Destination_img(props){

    return(

        <img className="starImage" src={props.image}></img>
    )
}

export default Destination_img