import React, { useState } from 'react';
import "./App.css"

const App = () => {

  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }

  return (
    <div className = "App">
      <div>I have {likes} likes.</div>
      <button onClick={addLike}>Like</button>
    </div>
  )

}

export default App;
