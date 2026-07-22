import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState(20)
  // let value = 20;

  function Increase(){
   setValue(value + 2)
  }
  return (
    <>
      <div>
        <h1>value: {value}</h1> 
        <button onClick={Increase}>🤖</button>
      </div>
    </>
  );
}

export default App;
