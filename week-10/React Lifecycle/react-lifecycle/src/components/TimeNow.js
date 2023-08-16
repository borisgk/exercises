import { useState, useEffect } from 'react'

export default function TimeNow(props) {

    let theTime = new Date(props.time)
    let showTime = theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds()


    return (
        <div>Current time: {showTime}</div>
    )
}