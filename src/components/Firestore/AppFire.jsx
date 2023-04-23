import React, { useEffect, useState } from 'react'


import {collection, doc, getDoc, getDocs ,getFirestore, query ,where, limit} from 'firebase/firestore';



export const AppFire = () => {


    const [items, setItems] = useState()

    // Ejemplo : Obtener 1 documento
    // useEffect(() => {
    
    //     const db = getFirestore()
    //     // "db" seria los items a consumir , 'items' = nombre de la coleccion y luego el ID 'zQwziFVSDPzT9s5erOvU'
    //     const ItemsRef =doc(db, 'items', 'zQwziFVSDPzT9s5erOvU')

    //     // "getDoc" para traer un documento
    //     getDoc(ItemsRef).then ((snapshot) => {
    //         if(snapshot.exists()) {
    //             setItems( {id: snapshot.id, ...snapshot.data() })
    //         }
    //     }) 

    // }, [])


    // Ejemplo: traer todos los documentos
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsColletion = collection(db, 'items');


    //     getDocs(itemsColletion).then((snapshot) => {
    //         if(snapshot === 0) {
    //         } else {
    //             console.log("No hay resultados")
    //         }
    //     setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    //     })

    // }, [])
    

    // Traer todos los documentos con condiciones
    useEffect (() => {
        const db = getFirestore()

        // Hacemos una query = consulta personalizada
        // Mostramos producto con un valor menor a 40
        const q = query (
            collection(db, 'items'),
            where('price', '<', 40)
        )

        getDocs(q).then((snapshot) => {
            if(snapshot === 0) {
                console.log("No hay resultados")
            }
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
    }, [])

    console.log(items);





    return (
        <div>
            {/* Si hay info en "items" renderizar lo siguiente... */}
            { items &&
            
            <>
            <img src={items.imageId} alt="nike-Cortez-white"></img>
            <h1>{items.title}</h1>
            <p>{items.description}</p>
            <p>Precio: {items.price}</p>
            
            
            </>
            
            }
        </div>
    )
}
