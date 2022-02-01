import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/home/Home'
import Destination from './Pages/destination/Destination'

function App(){

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Destination" element={<Destination />} />
        </Routes>
    )
}

export default App