import logo from './logo.svg';
import './App.css';

function App() {
  const getMorningGreeting = () => { 
    return(
      <div><p>Good Morning!</p></div>
    )
  }
  const getEveningGreeting = () => { 
    return(
      <div><p>Good Evening!</p></div>
    )
  }

  let timeNow = new Date().getHours()

  return (
    <div>
      <div className="ex-space">
        <h4 className='ex-title'>Spot-check 2</h4 >
        <div className="exercise" id="spotcheck-2">
          {timeNow < 12 ? getMorningGreeting() : getEveningGreeting()}
        </div>
      </div>
    </div>
  )
}

export default App;
