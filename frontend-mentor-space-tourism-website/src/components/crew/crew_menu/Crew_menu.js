import React from "react";
import './Crew_menu.css'

function Crew_menu(props){

    return(

        <ul className='menu_crew'>
                    <li className={props.selected == 'd_hurley' ? 'selected' : ''}
                        people="d_hurley" 
                        onClick={props.onClick} 
                        key={1}>
                    </li>
                    <li className={props.selected == 'm_shuttleworth' ? 'selected' : ''}
                        people="m_shuttleworth" 
                        onClick={props.onClick} 
                        key={2}>
                    </li>
                    <li className={props.selected == 'v_glover' ? 'selected' : ''} 
                        people="v_glover" 
                        onClick={props.onClick} 
                        key={3}>
                    </li>
                    <li className={props.selected == 'a_ansari' ? 'selected' : ''} 
                        people="a_ansari" 
                        onClick={props.onClick} 
                        key={4}>
                    </li>
                </ul>
    )
}

export default Crew_menu