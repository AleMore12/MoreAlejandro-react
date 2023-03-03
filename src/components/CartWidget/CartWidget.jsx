import React from 'react'
import logoCarrito from '../CartWidget/logoCarrito.png'

const CartWidget = () => {
    return (
    
        <div style={{display:'flex',justifyContent:'flex-end'}}>
            <img src={logoCarrito} style={{heigh:26, width:26}} />
            <p></p>
        </div>
    
    )
}

export default CartWidget