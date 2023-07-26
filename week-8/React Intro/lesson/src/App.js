import logo from './logo.svg';
import './App.css';

function App() {
  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing"
    } else if (temperature > 30) {
      return "hell-scape"
    } else {
      return "fair"
    }
  }

  const temperatures = [5, 20, 45]

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {temperatures.map(t => <div id="weatherBox" class={getClassName(t)}>{getClassName(t)}</div>)}
      </div>
    </div>
  )
}

export default App;
