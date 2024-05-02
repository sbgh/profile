import { useState } from 'react'
import Profile from './components/profile'
import Info from './components/info'
import Cube from './components/cube'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="row">
        <div id="main" className="col main">

          <Profile />
          <Cube />

        </div>
        <div id="mainInfo" className="cal main">

          <Info />

        </div>
      </div>
    </>
  )
}

export default App
