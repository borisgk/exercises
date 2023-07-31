import React, { useState } from 'react';

function Hot() {
  return (
    <div>I am feeling too hot.</div>
  )
}

function Cold () {
  return (
    <div>I am feeling too cold.</div>
  )
}



const App = () => {


  const [temperature, setTemperature] = useState(true)

  const changeTemperature = () => {
    if (temperature) {
      setTemperature(false)
    } else {
      setTemperature(true)
    }
  }

  if (temperature) {
    return (
      <div>
        <Hot />
        <button onClick={changeTemperature}>Toggle temperature</button>
      </div>)
  } else {
    return (
      <div>
        <Cold />
        <button onClick={changeTemperature}>Toggle temperature</button>
      </div>)
  }
}

export default App;
