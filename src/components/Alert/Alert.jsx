import React from 'react'

export const Alert = (props) => {
    return (
        

        <div class="alert alert-danger" role="alert" >
                {props.textAlert}
        </div>

    )
}

export default Alert