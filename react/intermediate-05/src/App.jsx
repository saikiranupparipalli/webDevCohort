import { useEffect, useState } from "react";
import "./App.css";
import { ChaiMenu } from "./ChaiMenu.jsx";
function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/all-chai`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        return data;
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("Error fetching data", error));
  }, [ ]);
  return (
    <>
      <h1>Hello, from react</h1>
      <p>Data from API: {data ? JSON.stringify(data) : "loading..🔃"}</p>
      <ChaiMenu/>
    </>
  );
}

export default App;
