import React from "react"
import './Destination_image_star.css'

function Destination_image_star(props){

    return(

        <img className="moon" src={props.src}></img>
    )
}

export default Destination_image_star