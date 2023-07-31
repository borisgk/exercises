import React, {useState} from 'react'
import Item from './Item'

function Home(props) {

    return (
        <div>{props.data.store.map(i => <Item item={i.item} price={i.price} />)}</div>
    )

}

export default Home