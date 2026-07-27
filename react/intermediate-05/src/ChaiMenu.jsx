import { useEffect, useState } from "react";

export function ChaiMenu() {
  //     const [data, setData] = useState(null)

  //     function CallApi(){

  //         // const response = fetch(`${import.meta.env.VITE_API_URL}/all-chai`)
  //         // const data = response.json()
  //         // return data
  //     }
  let [menu, setMenu] = useState(null);

  useEffect(() => {
 
      fetch(`${import.meta.env.VITE_API_URL}/all-chai`)
      .then((response) => response.json())
      .then((menu) => setMenu(menu))
      .catch((err)=> console.log('FETCH-ERROR', err))
   
  }, []);
  return (
    <>
      <h1>Hello from menu.chai</h1>
      <h2> {menu ? menu.map((item)=> <li key={item.id}>{item.name}</li>) : 'loading...🔂'}</h2>
    </>
  );
}
