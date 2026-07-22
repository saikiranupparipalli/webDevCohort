import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(10)
  const [posts, setPosts]= useState([])
  const [status, setStatus]= useState('idle')
  
  useEffect(()=>{
      const timerId = setInterval(()=>{
        setSeconds((current)=> Math.max(current -1, 0))
      },2000)
    return()=>{
      clearInterval(timerId)
    }
  }, [])
  return (
    <>
  <h1>Hello from react</h1>
  <h2>useEffect:{seconds}</h2>
    </>
  )
}

export default App
