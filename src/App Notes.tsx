import { useState } from 'react'
import './App.css'

function App() {
  //    Destructuring       React Hook
  const [count, setCount] = useState(0) 

  return (
    //Empty set of angular brackets is a react node (render fragment), it wraps it and displays without an extra div.
    <>
    {/* className - Because class is a reserved keyword and here you are writing tsx */}
      <div className="card" aria-atomic="true" >
        {/* Curly braces { }, and allows you to bind to and or write JS, TS */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
