import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'

import "../components/NavbarPage.css"

const NavbarPage = () => {

    const { cart, getTotal, getTotalQuantity, clearCart } = useContext(CartContext)

    const [isOpen, setIsOpen] = useState(false)

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Sneakers Shop</a>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
            </li>

            <li>
            {/* Los eventos onMouseEnter y onMouseLeave se utilizan en conjunto para mostrar y ocultar el menú desplegable del carrito. */}
            <div
                className="cart-dropdown-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>

                <i className="bi bi-cart4"></i>

                {cart.length > 0 && (
                    <span
                    className="badge badge-pill badge-danger ml-1"
                    style={{
                        backgroundColor: "red",
                        borderRadius: "50%",
                        padding: "4px 8px",
                        color: "white",
                    }}>
                    {getTotalQuantity()}
                    </span>
                )}
                {isOpen && (
                    <div className="cart-dropdown">
                    <ul>
                        {cart.map((item) => (
                        <li key={item.id}>
                            <span>{item.name} | <span style={{color: 'green'}}>x{item.quantity}</span> <b>${item.price*item.quantity}</b></span>
                        </li>
                        ))}
                    </ul>
                    { 
                    cart.length > 0 &&
                    <div style={{marginTop: '20px'}}>
                        <ul>
                        <span><u>Productos totales:</u> {getTotalQuantity()} </span>
                        </ul>
                        <ul>
                        <span><u>Total a pagar:</u> ${getTotal()} </span>
                        <button type="button" className="btn btn-dark btn-sm" onClick={() => clearCart()}>Vaciar</button>
                    </ul>

                    </div>
                    }
                    </div>
                )}
            </div>
            </li>
        </ul>
        </nav>
    );
};

export default NavbarPage