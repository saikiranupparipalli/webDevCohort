// import { useCountry } from "./Hooks/UseCounHook";
import { SetScore } from "./Components/setCounter";
import * as React from "react";
import "./App.css";

function App() {
  // const [coun, setCoun, fetching] = useCountry();
  const [count, setCount] = React.useState<number>(0);
  return (
    <div className="app-container">
      <div className="score-counter-card">
        {new Array(count).fill(null).map((e) => (
          <SetScore />
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>Score</button>
        
    </div>
  );
}

export default App;
