import React from "react"
import './Crew_img.css'

function Crew_img(props){

    return (

        <div className='container_people_img'>
            <img className='people_image' src={props.image}></img>
        </div>
    )
}

export default Crew_img