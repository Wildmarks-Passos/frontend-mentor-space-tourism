import React, { useState } from "react";
import './Technology.css'

import Header from "../../components/header/Header";
import H1_pages from "../../components/h1_pages/H1_pages";
import Technology_img from "../../components/technology/technology_img/Technology_img";
import Technology_menu from "../../components/technology/technology_menu/Technology_menu";
import Technology_terminology from "../../components/technology/technology_terminology/Technology_terminology";
import Technology_description from "../../components/technology/technology_description/Technology_description";

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
            <Header page='technology' />
            <main className="main_technology">
                <H1_pages number="03" text="SPACE LAUNCH 101" />
                <Technology_img image={pageState.class_image} />
                <div className="desktop_align_technology">
                    <Technology_menu selected={selected} 
                                    onClick={(el) => changeComponents(el)} />
                    <div>
                        <Technology_terminology name={pageState.name} />
                        <Technology_description description={pageState.description} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Technology