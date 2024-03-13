import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={'../pics/kettoscsomo02.jpg'} className="logo" alt="twinknot logo" />
      </div>
      <h1>informatív alkalmazás</h1>
      <h3>Kötelező és nem kötelező elemek megjelenítésére</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App;