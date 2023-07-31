import React, {useState} from 'react'

function Landing(props) {



    return (
        <div>
            <div>Welcome, {props.data.user}!</div>
                {props.data.store.filter(i => i.hottest).map(i => <div>Consider buying {i.item} for {i.price}!</div>)}
            <hr></hr>
        </div>
    )   

}

export default Landing