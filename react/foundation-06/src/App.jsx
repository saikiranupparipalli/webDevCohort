import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ManualForm from './ManualForm'
import HookForm from '../../foundation-05/HookForm'

function App() {
  const [tab, setTab]= useState('manual')

  return (
    <>
    <div>
      <button onClick={()=> setTab('manual')}>manual</button>
      <button onClick={()=> setTab('hrf')}>HookForm</button>
    </div>
    <div>
      {tab ==='manual' ? <ManualForm/> : <HookForm/>}
    </div>
    </>
  )
}

export default App
