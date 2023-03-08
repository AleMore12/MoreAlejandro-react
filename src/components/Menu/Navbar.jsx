import React from 'react'
import App_logo from '../Menu/logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <img src={App_logo} className="App-logo" alt="logo_react" />
                <Link to={'/'}>LOGO</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link className='nav_link' to={'/categoria/films'}>Categoria 1 Films</Link>
                    </li>
                    <li class="nav-item">
                    <Link className='nav_link' to={'/categoria/series'}>Categoria 2 Series</Link>
                    </li>
                    <li class="nav-item">
                    <Link className='nav_link' to={'/contact'}>Contacto </Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar





