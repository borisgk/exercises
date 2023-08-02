import React from "react"
import Contact from "./Contact"

function List (props) {

    return(
        <div>
        {props.contacts.map(c => <Contact name={c} displayConvo={props.displayConvo} />)}
        </div>
    )

}

export default List