import React, { useEffect, useState } from 'react'
// import { Alert } from './Alert/Alert'
// import '../components/ItemListContainer.css'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';






const films = [
    {id: 1, image: "https://i.pinimg.com/564x/a9/3d/c9/a93dc981c423a24bc4d8f4fd8170be73.jpg", category:'films',title:"residentEvil"},
    {id: 2, image: "https://i.pinimg.com/564x/74/f4/65/74f465d3ada4455e2f6defbe0fe11f67.jpg", category:'films',title:"ElPadrino"},
    {id: 3, image: "https://i.pinimg.com/564x/77/d9/07/77d90705a9baea217d18b60b64ce82d3.jpg", category:'series',title:"Twd"},
    {id: 4, image: "https://i.pinimg.com/564x/e8/2f/82/e82f828f60f7d210d7c8574595c771e9.jpg", category:'series',title:"Dark"}
];

export const ItemListContainer = ({ texto }) => {
    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }
    const [data, setdata] = useState([]);

    const [categoriaId] = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            },2000);
        });
        if (categoriaId) {
            getData.then(res => setdata(res => res.filter(film => film.category === categoriaId)));
        } else {
            getData.then(res => setdata(res));

        }
    }, [categoriaId])


    



    return (
        <>
        
            <title greeting={texto}/>
            <ItemCount initial={3} stock={5} ondAdd={onAdd}/>
            <ItemList data={data}/>
        
        </>
    )
}
        
    
export default ItemListContainer