import "./App.css";
 import { useCountry } from "./Hooks/CustomHook";

function App() {
  const [coun, fetchRes] = useCountry()
  return (
    <>
      <h1>Hello World</h1>
       <div>
        <button onClick={fetchRes}>Fetch</button>

      {coun ? <h2>{coun.name}
      </h2>: 'No country found'}
      </div>

    </>
  );
}

export default App;
