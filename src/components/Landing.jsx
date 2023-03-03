import React from 'react'
import Navbar from './Menu/Navbar'
import './Landing.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';


const Landing = () => {

    return (
        <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/categoria" element={<ItemListContainer />} />
            <Route exact path="/contact" element={<ContactView />} />
        </Routes>
    
    </BrowserRouter>
        </>
    )
}


export default Landing