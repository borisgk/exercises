import logo from './logo.svg';
import './App.css';

function App() {
  const getStuff = () => {}

  return (
    <div>
      <div className="ex-space">
        <h4 className='ex-title'>Spot-check 1</h4 >
        <div className="exercise" id="spotcheck-1">
          <h1>Some stuff: {getStuff()}</h1>
        </div>
      </div>
    </div>
  )
}

export default App;
