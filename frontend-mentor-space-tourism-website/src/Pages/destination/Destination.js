import React, { useState } from "react"
import './Destination.css'

import Header from "../../components/header/Header"
import H1_pages from '../../components/h1_pages/H1_pages'
import Destination_img from "../../components/destination/destination_img/Destination_img"

// import all star images
import Moon from '../../assets/images/image-moon.png'
import Mars from '../../assets/images/image-mars.png'
import Europa from '../../assets/images/image-europa.png'
import Titan from '../../assets/images/image-titan.png'
import Destination_menu from "../../components/destination/destination_menu/Destination_menu"
import Destination_star_name from "../../components/destination/destination_star_name/Destination_star_name"
import Destination_description from "../../components/destination/destination_description/Destination_description"
import Destination_avg_travel from "../../components/destination/destination_avg_travel/Destination_avg_travel"


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

        <div className="body_destination">
            <Header className="header" />
            <main className="main_destination">
                <H1_pages number="01" text="PICK YOUR DESTINATION" />
                <div className="desktop_align_destination">
                    <Destination_img image={pageState.image} />
                    <div>
                        <Destination_menu selected={selected} 
                                        onClick={(el) => changeComponents(el)}/>
                        <Destination_star_name name={pageState.name} />
                        <Destination_description description={pageState.description} />
                        <hr />
                        <Destination_avg_travel avg={pageState.distance}
                                                travel={pageState.travelTime} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Destination