import './App.css'
import { useState, useEffect } from 'react'
import TimeNow from './components/TimeNow'
import CloudinaryTest from './components/CloudinaryTest'
import Posts from './components/Posts'

function App() {

  const [currentTime, setCurrentTime] = useState(Date.now())

  function updateTime () {
    let newTime = Date.now()
    setCurrentTime(newTime)
  }

  useEffect(() => {
    setTimeout(updateTime, 1000)
  })
    
  return (
    <div className="App">
        <div>{currentTime}</div>
        <TimeNow time={currentTime} />
        <CloudinaryTest />
        <Posts />
    </div>
  )
}

export default App;
