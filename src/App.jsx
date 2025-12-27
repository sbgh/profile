
import { useEffect } from "react"
import AppNav from './components/nav'
import Footer from './components/footer'
import Info from './components/info'
import ContactForm from './components/contactForm'
import Services from './components/services'
import Tech from './components/tech'
import Cube from './components/cube'
import ThreeDBackgrounds from './components/3dBackgrounds'
import Support from './components/support'
import Login from './components/login'
import { makeCubes } from './components/cube'
import { mainTitle } from './components/mainTitle'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'

// import Cloud from './assets/Pines_Valley_1280x720.mp4'

// import Resume from './assets/Scott_Hurd_Resume.pdf'

import imgs from './components/backgrounds'

import Icon from './assets/ezstack.png'

import { useState } from 'react'

import './App.css'

function App() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const iconEle = $($.parseHTML('<link rel="icon" type="image/png" href="' + Icon + '">'))
  $('head').append(iconEle)

  useEffect(() => {

    // const vidEle = $($.parseHTML('<div id="vidContainer"><video autoplay muted id="dropVid"><source src="' + Cloud + '" type="video/mp4"></video></div>'))
    // $("#mainTitle").prepend(vidEle)

    $("#mainTitle").prepend('<div id="cubeStore"></div><div id="background" className="background"> <img src="' + imgs[0] + '" className="mont" /></div>')

    setTimeout(function () {
      $('.nav').addClass("show")
    }, 2000)

    //setup observe on about and contactForm
    let options = {
      root: null,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.00],
      rootMargin: '-8% 0% -10% 0%',
    };

    let showMain = function (entries, observer) {
      entries.forEach(entry => {

        const ratio = entry.intersectionRatio //entry.isIntersecting
        entry.target.style.opacity = ratio

        let ele = entry.target
        if ($(ele).hasClass("flutter")) {
          const x = $(ele).attr("data-x")
          const y = $(ele).attr("data-y")
          const r = $(ele).attr("data-r")

          var eWidth = $(window).width() * x / 10 * (1 - ratio)
          var eHeight = $(window).height() * y / 10 * (1 - ratio)
          var rotate = r * 180 * (1 - ratio)

          $(ele).find("span").css(
            {
              "transform": "translate(" + (eWidth).toString() + "px, " + (eHeight).toString() + "px) scale(" + ratio + ")  rotate3d(" + (Math.abs(x)).toString() + ", " + (Math.abs(y)).toString() + ", " + (Math.abs(r)).toString() + ", " + (rotate).toString() + "deg)",
              "opacity": ratio
            })

          if (entry.intersectionRatio > .90) {
            let x = Math.random() * 2 - 1
            let y = Math.random() * 2 - 1
            $(ele).attr("data-x", x)
            $(ele).attr("data-y", y)
          }

        }
      });
    }

    let observeShowMain = new IntersectionObserver(showMain, options)

    let target = document.querySelector("#mainInfo")
    observeShowMain.observe(target)

    target = document.querySelector("#contactContainer")
    observeShowMain.observe(target)

    //observe various words
    setTimeout(function () {

      let target = document.querySelector("#serviceCategoryHolder")
      observeShowMain.observe(target)

      target = '.serviceItem';
      document.querySelectorAll(target).forEach((i) => {
        if (i) {
          observeShowMain.observe(i);
        }
      });

      target = '.serviceCategory';
      document.querySelectorAll(target).forEach((i) => {
        if (i) {
          observeShowMain.observe(i);
        }
      });

      target = '.serviceItemIcon';
      document.querySelectorAll(target).forEach((i) => {
        if (i) {
          observeShowMain.observe(i);
        }
      });

      target = '.servicesBlurb';
      document.querySelectorAll(target).forEach((i) => {
        if (i) {
          observeShowMain.observe(i);
        }
      });

      target = '.serviceItemName';
      document.querySelectorAll(target).forEach((i) => {
        if (i) {
          observeShowMain.observe(i);
        }
      });

      target = '.serviceItemDescription';
      document.querySelectorAll(target).forEach((i) => {
        if (i) {
          observeShowMain.observe(i);
        }
      });

    }, 1000)

    //Start splash on landing
    setTimeout(function () {
      mainTitle()
    }, 300)

    //Run background drop 
    function grav() {

      $("#background").clone().insertBefore('#background').prop('id', 'backgroundGrav')
      $("#background").css({
        "transition": "opacity 2000s",
        "opacity": "0"
      });
      $("#backgroundGrav").css({
        "transition": "opacity 2000s",
        "opacity": ".7"
      });

      var r1 = (Math.random())
      var r2 = (Math.random())
      var r3 = (Math.random())
      const rotations = 160;

      const eWidth = $(window).width();
      const eHeight = $(window).height();

      setTimeout(function () {

        $("#background>img").removeClass("zoomed")

        $("#backgroundGrav").css({
          "transition": "transform 10s ease-in-out, opacity 9.5s ease-in",
          "opacity": "0",
          "transform":
            "translate(" + ((r1 - 0.5) * eWidth).toString() + "px, " + ((r2 - 0.5) * eHeight).toString() + "px) scale(" + (0).toString() + ") rotate3d(" + (r1 * 2 - 1).toString() + ", " + (r2 * 2 - 1).toString() + ", " + (r3 * 2 - 1).toString() + ", " + (rotations).toString() + "deg) "
          // "transform-origin": "center"
        });
      }, 3000)

      setTimeout(function () {
        $('#backgroundGrav').remove()
        $("#background>img").removeClass("background-change")
        $("#background>img").removeClass("zoomed")
      }, 12000)

    }

    //Run background fade 
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

    //Run background color filter 
    function sepChange() {
      //change background filter
      $("#background>img").addClass("background-change")
    }

    //fade in and out vid
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

    //keep track of all ui effect ids (timeouts)
    var loopId = 0, makeCubesId = 0, fadeBackId = 0, sepChangeId = 0, gravId = 0, vidDropId = 0
    //main splash page effect loop.
    function loop() {

      stopEffects()

      makeCubesId = setTimeout(function () {
        makeCubes()
        makeCubesId = 0
      }, 2000)

      // fadeBackId = setTimeout(function () {
      //   fadeBack()
      //   fadeBackId = 0
      // }, 25000)

      // sepChangeId = setTimeout(function () {
      //   sepChange()
      //   sepChangeId = 0
      // }, 50000)

      // gravId = setTimeout(function () {
      //   grav()
      //   gravId = 0
      // }, 70000)

      // vidDropId = setTimeout(function () {
      //   vidDrop()
      //   vidDropId = 0
      // }, 30000)

      loopId = setTimeout(loop, 35000)
      // console.log("bg effects looped")

    }

    //abort effects 
    function stopEffects() {
      if (makeCubesId !== 0) { clearTimeout(makeCubesId) }
      if (fadeBackId !== 0) { clearTimeout(fadeBackId) }
      if (sepChangeId !== 0) { clearTimeout(sepChangeId) }
      if (gravId !== 0) { clearTimeout(gravId); grav() }
      if (vidDropId !== 0) { clearTimeout(vidDropId) }

      if (loopId !== 0) { clearTimeout(loopId) }
      // console.log("bg effects stopped")
    }

    //call main effects loop on startup
    // loop()

    //abort loop effects if window loses focus. 
    // window.addEventListener("blur", stopEffects)
    //start loop if window back in focus
    // window.addEventListener("focus", loop)

  }, [])

  const [supportShow, setSupportShow] = useState(false);
  const handleSupportShow = () => setSupportShow(true);
  const handleSupportClose = () => setSupportShow(false);

  const [loginShow, setLoginShow] = useState(false);
  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);

  return (
    <>
      <div id="techBack" className="hidden" ></div>
      <ThreeDBackgrounds />
      <AppNav supportButtonClicked={handleSupportShow} loginButtonClicked={handleLoginShow} />

      <div id="mainContent" className="scroller">
        <div id='fullHeight' className="fullHeight">

          <div id="mainTitle">
            {/* <Cube /> */}
            <div id='mainTitleContain'><div id='mainTitleContainBorder' className="hidden"><div id='topTitle'></div><div id='subTitle'></div><div id='btnRow'></div></div></div>
          </div>

          <div id="services" className="row services">
            {/* <Services /> */}
          </div>

          <div id="tech" className="row tech">
            {/* <Tech /> */}
          </div>

          <div id="about" className="row about">

            <div id="mainInfo" className="col main mainInfo">
              <Info />
            </div>

          </div>

          <ContactForm />
        </div>
      </div>
      <Footer />

      <Support show={supportShow} onClose={handleSupportClose} />
      <Login show={loginShow} onClose={handleLoginClose} />
    </>
  )
}

export default App
