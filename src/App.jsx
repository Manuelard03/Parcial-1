import { useState } from 'react'
import './App.css'
import Planner from './sections/Planner/Planner.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Planner></Planner>
    </>
  )
}

export default App
