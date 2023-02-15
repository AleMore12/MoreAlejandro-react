import React from 'react'
import { Alert } from './Alert/Alert'

const ItemListContainer = (props) => {


    return (
<>
        
        <Alert textAlert={props.textAlert} />
        

        
        <div>{props.greeting}</div>
</>     
        
    )
}
export default ItemListContainer