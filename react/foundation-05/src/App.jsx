import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const [post, setPost] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const controller = new AbortController();

    async function main(){
      setStatus('loading')
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
      const data = await response.json()
      console.log(data)
      setPost(data)
      
      setStatus('success')
    }
    main()


    return ()=>{
      controller.abort()
    }
  }, []);


  return (<>
<h1>Hello from react</h1>
{/* <h1>{status}</h1> */}
 <button onClick={()=> console.log(status)}>click</button>
  </>
  )
}

export default App;
