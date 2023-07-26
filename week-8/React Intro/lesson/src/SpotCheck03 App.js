import logo from './logo.svg';
import './App.css';

function App() {
  const getMorningGreeting = () => <div>Good Morning</div>
  const getEveningGreeting = () => <div>Good Evening</div>

  return [
    getMorningGreeting(),
    getEveningGreeting(),
    <p>some text</p>
  ]
}

export default App;
