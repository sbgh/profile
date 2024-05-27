
import { useState } from 'react'
import { useEffect } from "react"
import Profile from './components/profile'
import Info from './components/info'
import Cube from './components/cube'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'

import Cloud from './assets/Pines_Valley_1280x720.mp4';

import imgs from './components/backgrounds';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    // console.log("logging this here")

    const vidEle = $($.parseHTML('<video autoplay muted id="dropVid"><source src="' + Cloud + '" type="video/mp4"></video>'))
    $("body").prepend(vidEle)
    $("body").prepend('<div id="cubeStore"></div><div id="background" class="background"> <img src="'+imgs[0]+'" className="mont" /></div>')

    setTimeout(function () {
      $('#main').addClass("mainShow")
    }, 600)

    setTimeout(function () {
      $('#mainInfo').addClass("mainShow")
    }, 1000)

    // const images = require.context('./assets', true);
    // console.log({images})

  }, [])

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
