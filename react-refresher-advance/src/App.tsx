import { useCountry } from "./Hooks/UseCounHook";

import "./App.css";

function App() {
  const [coun, setCoun, fetching] = useCountry();

  return (
    <>
      <h1>Hello World</h1>

      <div>
        <div>
          <button onClick={setCoun}>fetch Now</button>
        </div>
        {coun ? (
          fetching ? (
            <h1>Loading...</h1>
          ) : (
            <h1>{coun.name}</h1>
          )
        ) : (
          "No country found"
        )}
      </div>
    </>
  );
}

export default App;
