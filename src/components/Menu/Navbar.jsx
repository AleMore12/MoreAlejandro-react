import React from 'react'
import './Navbar.css'
import logo from './logo.svg';
import CartWidget from '../CartWidget/CartWidget';

    const Navbar = () => {
        return (

            // <img src={logo} className="App-logo" alt="logo" />
            // <button className='style-button' class="btn btn-primary" type="submit">Button</button>
            // <button class="btn btn-secondary" type="submit">Button</button>
            // <button class="btn btn-success" type="submit">Button</button>
            // <button class="btn btn-danger" type="submit">Button</button>
            // <button class="btn btn-warning" type="submit">Button</button>
            // <button class="btn btn-light" type="submit">Button</button>
            // <button class="btn btn-dark" type="submit">Button</button>             

<>

    <CartWidget/>

    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled">Disabled</a>
                </div>
            </div>
        </div>
    </nav>    
</>
    
    ) 
}






export default Navbar