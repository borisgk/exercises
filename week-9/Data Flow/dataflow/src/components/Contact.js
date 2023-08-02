import React, {useState} from "react"

function Contact (props) {

    return (
        <div className="Contact" onClick={() => props.displayConvo(props.name)}>{props.name}</div>
    )
}

export default Contact