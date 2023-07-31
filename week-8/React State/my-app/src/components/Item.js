import React, {useState} from 'react'

function Item(props) {
    return(
        <div>Item: {props.item}, price: {props.price}</div>
    )
}

export default Item