import React, { useState } from 'react'

function Houdini() {

    let [show, setShow] = useState(false)

    function changeState() {
        show ? setShow(false) : setShow(true)
    }

    return (
        <div>
            {show ? <p>Now you see me!</p> : <p>Now you do not see me!</p>}
            <button onClick={changeState}>Show/Hide</button>
        </div>
    )
}

export default Houdini