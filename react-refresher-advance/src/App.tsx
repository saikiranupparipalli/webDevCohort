import { SetScore } from "./Components/setCounter";
import "./App.css";
import * as React from "react";

function App() {
  const [flag, setFlag] = React.useState(false);
  return (
    <div>
      <button onClick={() => setFlag(!flag)}>switch</button>
      {flag ? (
        <SetScore playerName="virat" key={"v"} />
      ) : (
        <SetScore playerName="rohit" key={"r"} />
      )}
    </div>
  );
}

export default App;
