import React, { useState } from "react";
import './Technology.css'

import Header from "../../components/header/Header";
import H1_pages from "../../components/h1_pages/H1_pages";

function Technology(){

    const [pageState, setPageState] = useState({

        name: 'LAUNCH VEHICLE',
        class_image: 'img_1',
        description: `A launch vehicle or carrier rocket is a rocket-propelled
         vehicle used to carry a payload from Earth's surface to space, usually
          to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
           in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!`,
    })

    const [selected, setSelected] = useState('l_vehicle')

    function changeComponents(el){

        if(el.target.getAttribute('name') == 'l_vehicle'){

            setSelected('l_vehicle')

            setPageState({

                name: 'LAUNCH VEHICLE',
                class_image: 'img_1',
                description: `A launch vehicle or carrier rocket is a rocket-propelled
                vehicle used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
                in operation. Standing 150 metres tall, it's quite an awe-inspiring
                    sight on the launch pad!`,
            })
        }else if(el.target.getAttribute('name') == 'spaceport'){

            setSelected('spaceport')

            setPageState({

                name: 'spaceport',
                class_image: 'img_2',
                description: `A spaceport or cosmodrome is a site for launching
                 (or receiving) spacecraft, by analogy to the seaport for ships or airport
                  for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
                   situated to take advantage of the Earth’s rotation for launch.`,
            })
        }else if(el.target.getAttribute('name') == 'space_capsule'){
            
            setSelected('space_capsule')
            
            setPageState({

                name: 'space capsule',
                class_image: 'img_3',
                description: `A space capsule is an often-crewed spacecraft that uses a
                 blunt-body reentry capsule to reenter the Earth's atmosphere without wings.
                  Our capsule is where you'll spend your time during the flight. It includes
                   a space gym, cinema, and plenty of other activities to keep you entertained.`,
            })
        }
    }

    return(

        <div className="body_technology">
            <Header />
            <main className="main_technology">
                <H1_pages number="03" text="SPACE LAUNCH 101" />
                <div className={'techImg ' + pageState.class_image}></div>
                <ul className="menu_tech">
                    <li name='l_vehicle' 
                        className={selected == 'l_vehicle' ? 'selected' : ''} 
                        key={1} 
                        onClick={(el) => changeComponents(el)} >
                        1
                    </li>
                    <li name='spaceport' 
                        className={selected == 'spaceport' ? 'selected' : ''} 
                        key={2} 
                        onClick={(el) => changeComponents(el)}>
                        2
                    </li>
                    <li name='space_capsule' 
                        className={selected == 'space_capsule' ? 'selected' : ''} 
                        key={3} 
                        onClick={(el) => changeComponents(el)}>
                        3
                    </li>
                </ul>
                <div className="the_terminology">
                    <h2>the terminology</h2>
                    <h3>{pageState.name}</h3>
                </div>
                <div className="description">
                    <p>{pageState.description}</p>
                </div>
            </main>
        </div>
    )
}

export default Technology