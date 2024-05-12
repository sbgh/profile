import { useState } from 'react'
import { useEffect } from "react"
import Profile from './components/profile'
import Info from './components/info'
import Cube from './components/cube'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'

import Mont from './assets/pexels-eberhardgross-1062249.jpg';

import Cloud from './assets/1108225_1080p_Pines_Valley_1280x720.mp4';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    // console.log("logging this here")

    const vidEle = $($.parseHTML('<video autoplay muted id="dropVid"><source src="' + Cloud + '" type="video/mp4"></video>'))
    $("body").prepend(vidEle)
    $("body").prepend('<div id="cubeStore"></div><div id="background" class="background"> <img src=' + Mont + ' className="mont" /></div>')

    setTimeout(function () {
      $('#main').css({"opacity":"1"})
    }, 600)

    setTimeout(function () {
      $('#mainInfo').css({"opacity":"1"})
    }, 1000)

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
