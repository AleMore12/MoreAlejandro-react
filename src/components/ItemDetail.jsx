import React, { useContext,useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { CartContext } from '../Context/CartContext';

import {doc, getDoc, getFirestore}  from 'firebase/firestore'



const ItemDetail = () => {

    // const { itemId } = useParams()

    const { addToCart, removeFromCart } = useContext(CartContext)


    const [items, setItems] = useState()


    // useEffect(() => {
    
    //     const db = getFirestore()
    //     // "db" seria los items a consumir , 'items' = nombre de la coleccion y luego el ID 'zQwziFVSDPzT9s5erOvU'
    //     const ItemsRef =doc(db, 'items', 'AmJP59ABBHMvS0N4j9cu')

    //     // "getDoc" para traer un documento
    //     getDoc(ItemsRef).then ((snapshot) => {
    //         if(snapshot.exists()) {
    //             setItems( {id: snapshot.id, ...snapshot.data() })
    //         }
    //     }) 

    // }, [])

    useEffect(() => {
    
        const db = getFirestore()
        // "db" seria los items a consumir , 'items' = nombre de la coleccion y luego el ID 'zQwziFVSDPzT9s5erOvU'
        const ItemsRef =doc(db, 'items', 'AmJP59ABBHMvS0N4j9cu')

        // "getDoc" para traer un documento
        getDoc(ItemsRef).then ((snapshot) => {
            if(snapshot.exists()) {
                setItems( {id: snapshot.id, ...snapshot.data() })
            }
        }) 

    }, [])

console.log(items)





const selectItem = products.find(product => product.id == itemId)






    return (
        <div style={{  justifyContent: 'center', padding: '50px', gap: '20px' }}>
    
        <h2>{selectItem.name}</h2>
        <p>Price: {selectItem.price}</p>
        <p>Description: {selectItem.description}</p>
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