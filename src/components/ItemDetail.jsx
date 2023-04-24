import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { CartContext } from '../Context/CartContext';

import {doc, getDoc, getDocs, getFirestore,collection}  from 'firebase/firestore'



const ItemDetail = () => {

    const { itemId } = useParams()

    const { addToCart, removeFromCart } = useContext(CartContext)

    // const products = [
    //         {
    //         id: 1,
    //         name: 'Producto 1',
    //         image: 'https://i.ibb.co/CwnBrjN/Puma-Suede.jpg',
    //         price: 10,
    //         description: 'Descripción del producto 1'
    //         },
    //         {
    //         id: 2,
    //         name: 'Producto 2',
    //         image: 'https://i.ibb.co/ynBHJ5T/nike-cortez-white.jpg',
    //         price: 20,
    //         description: 'Descripción del producto 2'
    //         },
    //         {
    //         id: 3,
    //         name: 'Producto 3',
    //         image: 'https://i.ibb.co/NVwmHHj/Nike-Air-Force-white.jpg',
    //         price: 30,
    //         description: 'Descripción del producto 3'
    //         }
    //     ];
        

    const [items, setItems] = useState()


    useEffect(() => {
        
        const db = getFirestore()
        const ItemsColletion = collection (db, 'items')

        getDocs(ItemsColletion).then((snapshot => {
            if(snapshot == 0) {
                console.log("No hay resultados")
            }
        setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        }))
        
        
    }, [])
    



    const selectItem = items.find(product => product.id == itemId)


    return (
        <div style={{  justifyContent: 'center', padding: '50px', gap: '20px' }}>
        
        <img src={items.imageId} style={{objectFit:'contain', height:'200px'}} />
        <h2>{items.name}</h2>
        <p>Price: {items.price}</p>
        <p>Description: {items.description}</p>
        <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', marginRight: '1rem' }} onClick={() => addToCart(selectItem, 1)}>
            Agregar al carrito
        </button>
        <button style={{
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '25px',
            height: '25px'
            }} onClick={() => removeFromCart(selectItem.id)}>X</button>
        </div>
    );
}

export default ItemDetail