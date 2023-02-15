import React from 'react'

export const Button = (props) => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center'}}>
        <button 
          style={props.buttonCondition ? {backgroundColor:'green',color:"yellow", margin:50} : {backgroundColor:'skyblue',color:"blue"}}> {props.buttonName} 
        </button>
    </div>
    </>
  )
}


export default Button
