import './App.css';

function App() {

  const myButtonGotHovered = () => {console.log("Hover Detected!")}


  return (
    <button onMouseEnter = {myButtonGotHovered}>Hover over me, you there!</button>
  );
}

export default App;
