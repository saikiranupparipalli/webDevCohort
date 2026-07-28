import { useEffect, useState } from "react";
import { CustomHook } from "./hooks/CustomHooks";

export function ChaiMenu() {
  let [menu, setMenu] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/all-chai`)
      .then((response) => response.json())
      .then((menu) => setMenu(menu))
      .catch((err) => console.log("FETCH-ERROR", err));
  }, []);

   

  return (
    <>
      <h1>Hello from menu.chai</h1>
      <h2>
        {" "}
        {menu
          ? menu.map((item) => <li key={item.id}>{item.name}</li>)
          : "loading...🔂"}
      </h2>
    </>
  );
}
