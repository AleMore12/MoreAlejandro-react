import React, { useContext } from 'react'
import themeContext from '../cartContext/themeContext'
// import React, { useState } from 'react'



const Navbar = () => {

    // Consumir mi contexto
    const { darkMode, toggleDarkMode } = useContext(themeContext)
    
        return (
        <nav class={darkMode ? "navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-dark bg-dark"}>
            <a class="navbar-brand" href="#">Navbar</a>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <button onClick={toggleDarkMode}>Modo {darkMode ? 'Claro' : 'Oscuro'}</button>
                </li>
                </ul>
            </div>
        </nav>
        )
    }
    
export default Navbar