import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

import { doc, getDoc, getFirestore}  from 'firebase/firestore'
import ItemDetail from './ItemDetail';


const Home = () => {
  const { addToCart, removeFromCart } = useContext(CartContext);


  const [items, setItems] = useState()


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


  // useEffect(() => {
  //   const db = getFirestore()
  //   const snkRef = collection(db, 'items')


  //   getDocs(snkRef).then((snapshot) => {
  //     if(snapshot === 0 ) {
  //       console.log("no hay resultados")
  //     }
  //       setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  //   })
  // }, [])
  
  
console.log(items)



  

  




  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Bienvenidos</h1>
            
            <div style={{ display: 'flex',flexDirection:'column'}}>
            {/* Si hay info en "items" renderizar lo siguiente... */}

            
      
    
            { items && 
            
            <>
            <img src={items.imageId} alt="snk" style={{width:'300px',height:'400px'}}></img>
            <h1>{items.title}</h1>
            <p>Precio: {items.price}</p>
            <h2 style={{color:'black'}}>{items.description}</h2>
            
            
            </>
            }
          
        </div>

        
  





      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', gap: '20px' }}>
        
            
            {/* <img src={items.imageId} style={{objectFit:'contain', height:'200px'}} /> */}
            {/* <h3 style={{ textAlign: 'center' }}>{items.title}</h3> */}
            {/* <p style={{ textAlign: 'center' }}>{items.description}</p>
            <p style={{ textAlign: 'center' }}>Precio: ${items.price}</p> */}
            <Link style={{ textAlign: 'center' }} to={'/item'}>Ver detalle</Link>  



    



            <div style={{ display: 'flex', alignItems: 'center' }}>
            
                <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', marginRight: '1rem' }} onClick={() => addToCart(items, 1)}>
                    Agregar al carrito
                </button>
                <button style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px'
                }} onClick={() => removeFromCart(items.id)}>X</button>
                
            </div>
            
            
          </div> 
        


{/* <div>

    { items &&
      <>
      <img src={items.imageId} />
      <h4>{items.title}</h4>
      <p>{items.description}</p>
      <p>Stock: {items.stock}. Precio: {items.price}</p>
      </>
        
  
  
    </div> */}
  
      </div>
    
    
            
            
        
    // </div>
  );
};

export default Home;