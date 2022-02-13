import React from "react";
import './Destination_avg_travel.css'

function Destination_avg_travel(props){

    return (

        <div className="avg_travel">
            <div className="avgDistance">
                <span>AVG. DISTANCE</span>
                <span>{props.avg}</span>
            </div>
            <div className="travelTime">
                <span>EST. TRAVEL TIME</span>
                <span>{props.travel}</span>
            </div>
        </div>
    )
}

export default Destination_avg_travel