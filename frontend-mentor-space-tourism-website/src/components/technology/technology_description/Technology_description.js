import React from "react";
import './Technology_description.css'

function Technology_description(props){

    return(

        <div className="description">
            <p>{props.description}</p>
        </div>
    )
}

export default Technology_description