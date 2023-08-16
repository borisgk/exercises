import React from "react"

function Post(props) {

    return (
        <div className="post">
            <p className="post-title">{props.title}</p>
            <p className="post-body">{props.body}</p>
        </div>
    )

}

export default Post