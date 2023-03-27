import React, { useState } from 'react'
import ThemeContext from './cartContext/themeContext'
import Navbar from './NavBar/Navbar'
import './Landing.css'




const Landing = () => {

    const [darkMode, setDarkMode] = useState(true)
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <Navbar />
        </ThemeContext.Provider>
        )
}

export default Landing