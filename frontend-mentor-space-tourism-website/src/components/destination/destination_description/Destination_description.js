import React from "react";
import './Destination_description.css'

function Destination_description(props){

    return(

        <p className="destDescription">{props.description}</p>
    )
}

export default Destination_description