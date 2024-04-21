import { useState } from 'react'
import Profile from './components/profile'
import Cube from './components/cube'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div id="main" className="main">

      <Profile />
      <Cube />

      </div>
    </>
  )
}

export default App
