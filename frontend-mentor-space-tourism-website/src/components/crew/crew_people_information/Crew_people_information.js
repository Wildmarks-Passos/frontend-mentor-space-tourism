import React from "react";
import './Crew_people_information.css'

function Crew_people_information(props){

    return(

        <div className='people_information'>
            <div>
                <p className='people_function'>{props.function}</p>
                <p className='people_name'>{props.name}</p>
            </div>
            <p className='people_description'>{props.description}</p>
        </div>
    )
}

export default Crew_people_information