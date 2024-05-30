
import { useEffect } from "react"
import AppNav from './components/nav'
import Profile from './components/profile'
import Info from './components/info'
import Cube from './components/cube'
import Support from './components/support'
import Login from './components/login'
import { makeCubes } from './components/cube';
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'

import Cloud from './assets/Pines_Valley_1280x720.mp4';

import imgs from './components/backgrounds';

import { useState } from 'react';

import './App.css'

function App() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  useEffect(() => {
    // console.log("logging this here")

    const vidEle = $($.parseHTML('<video autoplay muted id="dropVid"><source src="' + Cloud + '" type="video/mp4"></video>'))
    $("body").prepend(vidEle)
    $("body").prepend('<div id="cubeStore"></div><div id="background" class="background"> <img src="' + imgs[0] + '" className="mont" /></div>')

    setTimeout(function () {
      $('.nav').addClass("show")
    }, 2000)

    setTimeout(function () {
      $('#main').addClass("mainShow")
    }, 600)

    setTimeout(function () {
      $('#mainInfo').addClass("mainShow")
    }, 1000)

    // const images = require.context('./assets', true);
    // console.log({images})

    function grav() {

      $("#background").clone().insertAfter('#background').prop('id', 'backgroundGrav')
      $("#root").clone().appendTo("#backgroundGrav").prop('id', 'rootGrav')
      $("#rootGrav #main").prop('id', 'rootMain')

      $("#main").css({ color: "black" })

      var r1 = (Math.random())
      var r2 = (Math.random())
      var r3 = (Math.random())
      const rotations = 160;

      const eWidth = $(window).width();
      const eHeight = $(window).height();

      $("#background").css({
        "transition": "opacity 0s",
        "opacity": "0"
      });

      $("#background>img").removeClass("zoomed")

      $("#backgroundGrav").css({
        "transition": "transform 10s ease-in-out, opacity 9.5s ease-in",
        "opacity": "0",
        "transform":
          "translate(" + ((r1 - 0.5) * eWidth).toString() + "px, " + ((r2 - 0.5) * eHeight).toString() + "px) scale(" + (0).toString() + ") rotate3d(" + (r1 * 2 - 1).toString() + ", " + (r2 * 2 - 1).toString() + ", " + (r3 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) "
        // "transform-origin": "center"
      });

      setTimeout(function () {
        $('#backgroundGrav').remove()
        $("#background>img").removeClass("background-change")
        $("#background>img").removeClass("zoomed")
      }, 12000)

    }

    function fadeBack() {
      //fade rand background into view

      const imgIndex = getRandomInt(0, imgs.length - 1)
      $("#background>img").attr({ "src": imgs[imgIndex] })

      $("#background").css({
        "transition": "opacity 8s",
        "opacity": ".7"

      })

      $("#background>img").addClass("zoomed")
      // $("#backgroundGrav>img")
    }

    function sepChange() {
      //change background filter
      $("#background>img").addClass("background-change")

      // $("#backgroundGrav>img.zoomed").css({"transform": "scale(1.1)"})
    }

    function vidDrop() {

      $("#dropVid").addClass('dropVid-changed')
      $('#dropVid').prop({
        currentTime: 0
      });

      $('#dropVid').prop({
        playbackRate: 0.8
      });

      $('#dropVid')[0].play();

      setTimeout(function () {

        $("#dropVid").removeClass('dropVid-changed')

      }, 7000)
    }

    function loop() {

      setTimeout(function () {
        makeCubes()
      }, 10000)

      setTimeout(function () {
        fadeBack()
      }, 40000)

      setTimeout(function () {
        sepChange()
      }, 60000)

      setTimeout(function () {
        grav()
      }, 80000)

      setTimeout(function () {
        vidDrop()
      }, 90000)

    }
    loop()
    setInterval(loop, 100000)

  }, [])

  const [supportShow, setSupportShow] = useState(false);
  const handleSupportShow = () => setSupportShow(true);
  const handleSupportClose = () => setSupportShow(false);

  const [loginShow, setLoginShow] = useState(false);
  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);

  return (
    <>
      <AppNav supportButtonClicked={ handleSupportShow } loginButtonClicked={ handleLoginShow } />
      <div className="row mainContent">
        <div id="main" className="col main">

          <Profile />
          <Cube />

        </div>
        <div id="mainInfo" className="col main mainInfo">

          <Info />

        </div>
      </div>
      <Support show={supportShow} onClose={handleSupportClose} />
      <Login show={loginShow} onClose={handleLoginClose} />
    </>
  )
}

export default App
