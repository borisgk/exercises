import React, {useState} from "react"

function Conversation(props) {
    console.log(props)
    return (
        <div>
            <h1>Conversation with {props.partner}</h1>
            {props.convo.map(c => <div>
                <span className="sender">{c.sender === "self" ? "Me: " : `${props.partner}: `}</span>
                <span className="text">{c.text}</span>
            </div>)}
            <button onClick={props.backToList}>Back</button>
        </div>
    )

}

export default Conversation