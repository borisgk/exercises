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

function About () {
  return [
    <SignUp />,
    <Blurb />
  ]
}

function SignUp (){
  return (
    <div><a href="https://google.com">Sign Up Here</a></div>
  )
}

function Blurb (){
  return (
    <div><p>Some text just to see the function works.</p></div>
  )
}

function App() {

  let isUserLoggedIn = localStorage.getItem("loggedIn")
  let componentToDisplay = isUserLoggedIn ? <LandingPage /> : <AboutUs />

  return (
      <div className="app">
          <Nav />
          {componentToDisplay}
          <About />
      </div>
  )
}
export default App;
