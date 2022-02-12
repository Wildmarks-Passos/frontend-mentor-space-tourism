import React, { useState } from 'react'
import './Crew.css'

import Header from '../../components/header/Header'
import H1_pages from '../../components/h1_pages/H1_pages'
import Crew_img from '../../components/crew/crew_img/Crew_img'

import D_Hurley from '../../assets/images/image-douglas-hurley.png'
import M_Shuttleworth from '../../assets/images/image-mark-shuttleworth.png'
import V_Glover from '../../assets/images/image-victor-glover.png'
import A_Ansari from '../../assets/images/image-anousheh-ansari.png'
import Crew_menu from '../../components/crew/crew_menu/Crew_menu'
import Crew_people_information from '../../components/crew/crew_people_information/Crew_people_information'

function Crew(){

    const [pageState, setPageState] = useState({

        function: 'commander',
        name: 'douglas hurley',
        image: D_Hurley,
        description: `Douglas Gerald Hurley is an American engineer, 
                    former Marine Corps pilot and former NASA astronaut.
                     He launched into space for the third time as commander
                      of Crew Dragon Demo-2.`,
    })

    const [selected, setSelected] = useState('d_hurley')

    function changeComponents(el){

        if(el.target.getAttribute('people') == 'd_hurley'){

            setSelected('d_hurley')

            setPageState({

                function: 'commander',
                name: 'douglas hurley',
                image: D_Hurley,
                description: `Douglas Gerald Hurley is an American engineer, 
                            former Marine Corps pilot and former NASA astronaut.
                            He launched into space for the third time as commander
                            of Crew Dragon Demo-2.`,
            })
        }else if(el.target.getAttribute('people') == 'm_shuttleworth'){

            setSelected('m_shuttleworth')

            setPageState({

                function: 'Mission Specialist',
                name: 'MARK SHUTTLEWORTH',
                image: M_Shuttleworth,
                description: `Mark Richard Shuttleworth is the founder and CEO of Canonical,
                             the company behind the Linux-based Ubuntu operating system.
                              Shuttleworth became the first South African to travel to space
                               as a space tourist.`,
            })
        }else if(el.target.getAttribute('people') == 'v_glover'){
            
            setSelected('v_glover')
            
            setPageState({

                function: 'PILOT',
                name: 'Victor Glover',
                image: V_Glover,
                description: `Pilot on the first operational flight of the SpaceX
                             Crew Dragon to the International Space Station. Glover
                              is a commander in the U.S. Navy where he pilots an F/A-18.
                              He was a crew member of Expedition 64, and served as a
                               station systems flight engineer. `,
            })
        }else if(el.target.getAttribute('people') == 'a_ansari'){

            setSelected('a_ansari')
            
            setPageState({

                function: 'Flight Engineer',
                name: 'Anousheh Ansari',
                image: A_Ansari,
                description: `Anousheh Ansari is an Iranian American engineer and co-founder
                             of Prodea Systems. Ansari was the fourth self-funded space tourist,
                              the first self-funded woman to fly to the ISS, and the first
                               Iranian in space. `,
            })
        }
    }

    return(

        <div className='body_crew'>
            <Header />
            <main className='main_crew'>
                <H1_pages number="02" text="MEET YOUR CREW" />
                <Crew_img image={pageState.image} />
                <Crew_menu selected={selected} onClick={(el) => changeComponents(el)}/>
                <Crew_people_information description={pageState.description}
                                         function={pageState.function}
                                         name={pageState.name}/>
            </main>
        </div>
    )
}

export default Crew