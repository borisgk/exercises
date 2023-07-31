import React, { useState } from 'react'
import "./App.css"
import Landing from './components/Landing'
import Home from './components/Home'

const App = () => {

  const [state, setState] = useState({ 
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })


  return (
    <div>
      <Landing data={state} />
      <Home data={state} />
    </div>
  )
}

export default App;
