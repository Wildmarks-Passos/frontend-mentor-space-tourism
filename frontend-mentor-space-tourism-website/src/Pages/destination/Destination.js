import React, { useState } from "react"
import './Destination.css'

import Destination_image_star from "../../components/destination_image_star/Destination_image_star"
import Header from "../../components/header/Header"

// import all star images
import Moon from '../../assets/images/image-moon.png'
import Mars from '../../assets/images/image-mars.png'
import Europa from '../../assets/images/image-europa.png'
import Titan from '../../assets/images/image-titan.png'


function Destination(){

    const [pageState, setPageState] = useState({

        name: 'MOON',
        image: Moon,
        description: `See our planet as you’ve never seen it before. A
                     perfect relaxing trip away to help regain 
                     perspective and come back refreshed. While 
                     you’re there, take in some history by visiting the 
                     Luna 2 and Apollo 11 landing sites.`,
        distance: '384,400 KM',
        travelTime: '3 DAYS'
    })

    const [selected, setSelected] = useState('moon')

    function changeComponents(el){

        if(el.target.getAttribute('destination') == 'moon'){

            setSelected('moon')

            setPageState({

                name: 'MOON',
                image: Moon,
                description: `See our planet as you’ve never seen it before. A
                             perfect relaxing trip away to help regain 
                             perspective and come back refreshed. While 
                             you’re there, take in some history by visiting the 
                             Luna 2 and Apollo 11 landing sites.`,
                distance: '384,400 KM',
                travelTime: '3 DAYS'
            })
        }else if(el.target.getAttribute('destination') == 'mars'){

            setSelected('mars')

            setPageState({

                name: 'MARS',
                image: Mars,
                description: `Don’t forget to pack your hiking boots. You’ll need
                             them to tackle Olympus Mons, the tallest planetary mountain
                              in our solar system. It’s two and a half times the size
                               of Everest!`,
                distance: '225 MIL. KM',
                travelTime: '9 MONTHS'
            })
        }else if(el.target.getAttribute('destination') == 'europa'){
            
            setSelected('europa')
            
            setPageState({

                name: 'EUROPA',
                image: Europa,
                description: `The smallest of the four Galilean moons orbiting
                             Jupiter, Europa is a winter lover’s dream. With an icy surface,
                              it’s perfect for a bit of ice skating, curling, hockey, or simple
                               relaxation in your snug wintery cabin.`,
                distance: '628 MIL. KM',
                travelTime: '3 YEARS'
            })
        }else if(el.target.getAttribute('destination') == 'titan'){

            setSelected('titan')
            
            setPageState({

                name: 'TITAN',
                image: Titan,
                description: `The only moon known to have a dense atmosphere other than Earth,
                             Titan is a home away from home (just a few hundred degrees colder!).
                              As a bonus, you get striking views of the Rings of Saturn.`,
                distance: '1.6 BIL. KM',
                travelTime: '7 YEARS'
            })
        }
    }

    return (

        <>
            <Header className="header" />
            <main className="main">
                <h1 className="h1_destination_1"><span>01</span>PICK YOUR DESTINATION</h1>
                <Destination_image_star src={pageState.image} />
                <ul className="destination_menu">
                    <li className={selected == 'moon' ? "selected" : ""} onClick={(el) => changeComponents(el)} 
                        destination={'moon'} 
                        key={1}>MOON</li>

                    <li className={selected == 'mars' ? "selected" : ""} onClick={(el) => changeComponents(el)} 
                        destination={'mars'} 
                        key={2}>MARS</li>

                    <li className={selected == 'europa' ? "selected" : ""} onClick={(el) => changeComponents(el)} 
                        destination={'europa'} 
                        key={3}>EUROPA</li>

                    <li className={selected == 'titan' ? "selected" : ""} onClick={(el) => changeComponents(el)} 
                        destination={'titan'} 
                        key={4}>TITAN</li>
                </ul>
                <h2 className="starName">{pageState.name}</h2>
                <p className="destDescription">{pageState.description}</p>
                <hr />
                <div className="avgDistance">
                    <span>AVG. DISTANCE</span>
                    <span>{pageState.distance}</span>
                </div>
                <div className="travelTime">
                    <span>EST. TRAVEL TIME</span>
                    <span>{pageState.travelTime}</span>
                </div>
            </main>
        </>
    )
}

export default Destination