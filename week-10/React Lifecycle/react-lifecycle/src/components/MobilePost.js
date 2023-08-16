import React from "react"

function MobilePost(props) {

    return (
        <div className="mobile-post">
            <p className="post-title">{props.title}</p>
            <p className="post-body">{props.body}</p>
        </div>
    )

}

export default MobilePost