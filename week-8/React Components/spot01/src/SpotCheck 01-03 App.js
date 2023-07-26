import logo from './logo.svg';
import './App.css';

export function Sum() {
  let num1 = 5000
  let num2 = 6000

  return <div>{num1 + num2}</div>
}

function Nav() {
  return (
      <div id="nav"><span>Home</span><span>About</span></div>
  )
}

function LandingPage() {
  return (<h1>Welcome!</h1>)
}


function AboutUs() {
  return <p>This is something about us and who we are.</p>
}

function App() {

  let isUserLoggedIn = localStorage.getItem("loggedIn")
  let componentToDisplay = isUserLoggedIn ? <LandingPage /> : <AboutUs />

  return (
      <div className="app">
          <Nav />
          {componentToDisplay}
      </div>
  )
}
export default App;
