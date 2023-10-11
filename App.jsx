import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addval = () => {
    if (count < 20) {
      setCount(count + 1)
      // setCount(count + 3)
    }

  }
  const removeval = () => {
    if (count > 0) {
      setCount(count - 1)
    }

  }
  return (
    <>
      <h1>Counter Project</h1>
      <div className="box">
        Value : {count}
        <button onClick={addval}>Add Value</button>
        <button onClick={removeval}>Remove Value</button>
      </div>
    </>
  )
}

export default App
