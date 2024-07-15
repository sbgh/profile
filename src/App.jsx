
import { useEffect } from "react"
import AppNav from './components/nav'
import Profile from './components/profile'
import Footer from './components/footer'
import Info from './components/info'
import Cube from './components/cube'
import Support from './components/support'
import Login from './components/login'
import { makeCubes } from './components/cube';
import { mainTitle } from './components/mainTitle';
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'

import Cloud from './assets/Pines_Valley_1280x720.mp4';

import Resume from './assets/Scott_Hurd_Resume.pdf';

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

    const vidEle = $($.parseHTML('<div id="vidContainer"><video autoplay muted id="dropVid"><source src="' + Cloud + '" type="video/mp4"></video></div>'))
    $("#mainTitle").prepend(vidEle)
    $("#mainTitle").prepend('<div id="cubeStore"></div><div id="background" class="background"> <img src="' + imgs[0] + '" className="mont" /></div>')

    setTimeout(function () {
      $('.nav').addClass("show")
    }, 2000)


    let options = {
      root: document.querySelector("#mainContent"),
      rootMargin: "0px",
      threshold: 0.8,
    };

    let showMain = function (entries, observer) {
      entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
          setTimeout(function () {
            $('#main').addClass("mainShow")
          }, 0)

          setTimeout(function () {
            $('#mainInfo').addClass("mainShow")
          }, 500)
        } else {

        }
      });
    }

    let observeShowMain = new IntersectionObserver(showMain, options);
    let target = document.querySelector("#about");
    setTimeout(function () {
      observeShowMain.observe(target);
    }, 500)

    setTimeout(function () {
      mainTitle()
    }, 600)

    function grav() {

      $("#background").clone().insertAfter('#background').prop('id', 'backgroundGrav')
      // $("#root").clone().appendTo("#backgroundGrav").prop('id', 'rootGrav')
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

    var loopId = 0, makeCubesId = 0, fadeBackId = 0, sepChangeId = 0, gravId = 0, vidDropId = 0
    function loop() {

      stopEffects()

      makeCubesId = setTimeout(function () {
        makeCubes()
        makeCubesId = 0
      }, 7000)

      fadeBackId = setTimeout(function () {
        fadeBack()
        fadeBackId = 0
      }, 40000)

      sepChangeId = setTimeout(function () {
        sepChange()
        sepChangeId = 0
      }, 60000)

      gravId = setTimeout(function () {
        grav()
        gravId = 0
      }, 80000)

      vidDropId = setTimeout(function () {
        vidDrop()
        vidDropId = 0
      }, 90000)

      loopId = setTimeout(loop, 100000)
      console.log("bg effects looped")

    }

    function stopEffects() {
      if (makeCubesId !== 0) { clearTimeout(makeCubesId) }
      if (fadeBackId !== 0) { clearTimeout(fadeBackId) }
      if (sepChangeId !== 0) { clearTimeout(sepChangeId) }
      if (gravId !== 0) { clearTimeout(gravId); grav() }
      if (vidDropId !== 0) { clearTimeout(vidDropId) }

      if (loopId !== 0) { clearTimeout(loopId) }
      console.log("bg effects stopped")
    }

    loop()
    window.addEventListener("blur", stopEffects);
    window.addEventListener("focus", loop);

  }, [])

  const [supportShow, setSupportShow] = useState(false);
  const handleSupportShow = () => setSupportShow(true);
  const handleSupportClose = () => setSupportShow(false);

  const [loginShow, setLoginShow] = useState(false);
  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);

  return (
    <>
      <AppNav supportButtonClicked={handleSupportShow} loginButtonClicked={handleLoginShow} />

      <div id="mainContent">
        <div id="mainTitle">

          <Cube />
          
          <div id='mainTitleContain'><div id='topTitle'></div><div id='subTitle'></div><div id='btnRow'></div></div>
        </div>
        <div id="about" className="row about">

          {/* <div id="main" className="col main">

            <Profile />

          </div> */}
          <div id="mainInfo" className="col main mainInfo">

            <Info />

          </div>
        </div>
      </div>
      <Footer />

      <Support show={supportShow} onClose={handleSupportClose} />
      <Login show={loginShow} onClose={handleLoginClose} />
    </>
  )
}

export default App
