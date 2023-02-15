import React from 'react'
import { Alert } from './Alert/Alert'
import Button from './Button/Button'
import ItemListContainer from './ItemListContainer'
import Navbar from './Menu/Navbar'

export const Landing = () => {
    return (
    <>
        <Navbar/>
        
        <Button buttonName= "Aceptar" />


        <Button buttonName= "Danger" buttonCondition= {true} hacemeEsto={"/index"}/>

        <div style = {{padding:20}}>
            <Alert/>
        </div>
        
        
        
        <ItemListContainer greeting='Bienvenidos a mi TIENDA VIRTUAL'/>
    </>

    
    
    

)
}



export default Landing