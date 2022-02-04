import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/home/Home'
import Destination from './Pages/destination/Destination'
import Crew from './Pages/crew/Crew'
import Technology from './Pages/technology/Technology'

function AppRoutes(){

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Destination" element={<Destination />} />
            <Route path="Crew" element={<Crew />} />
            <Route path='Technology' element={<Technology />} />
        </Routes>
    )
}

export default AppRoutes