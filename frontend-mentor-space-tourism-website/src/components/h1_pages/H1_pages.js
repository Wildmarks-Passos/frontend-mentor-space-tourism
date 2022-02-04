import React from 'react'
import './H1_pages.css'

function H1_pages(props){

    return(

        <h1 className="h1_destination_1"><span>{props.number}</span>{props.text}</h1>
    )
}

export default H1_pages