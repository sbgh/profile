

import snaps from './snaps'

import $ from 'jquery';
// import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'Here are some of the projects that we have worked on'
const techsList = `
WordPress Custom Theme (Professional Services)
Stylish WordPress theme with hand coded 3D effects and responsive design. Plugins include Advanced Custom Fields for content management and WP Mail SMTP for online messaging.
https://kilanicorp.com/
WordPress Custom Theme (Hospitality)
Amazing looking multiple page web site for an Inn. Features complex reservation form, many animation effects and a perfect flow.
https://theinncalgary.com/
dsStack Data Science Environment Builder
Complex Graphical User Interface and Node.js server. This Free Open Source application has the ability to connect to cloud servers and provision them with packages used by data scientists. Things like Docker, Steamlit and more. 
https://ezstacksystems.com:8443/
ezStack Automated Web Server & Application Builder
An even more complex Free Open Source application made with Node.js. Used to build web application, and manage servers, with a building-blocks approach. Provides user feedback via headless Chrome integration.
https://github.com/sbgh/builder
`

const techsArr = techsList.split("\n").filter(function (e) { return e }); //split tech list lines into array and filter out empty items

setTimeout(function () {

    $("#techsList").html("")
    $("#techBack").html("")

    $("#techsTitle").text(title)

    let twoDeeArr = []
    while (techsArr.length) twoDeeArr.push(techsArr.splice(0, 3))

    if (twoDeeArr.length !== 0) {
        for (let x in twoDeeArr) {

            let sName = twoDeeArr[x][0]
            let sDesc = twoDeeArr[x][1]
            let slink = twoDeeArr[x][2]
            let sImg = snaps[0][x]
            // let sVid = snaps[1][x] ? snaps[1][x] : ''

            const itemHTML = "<div idx='" + x + "' class='techItemHolder techItemSnap'><div class='col-md-12 techItem'><div class='col techItemText'></div></div></div>"

            const itemEle = $($.parseHTML(itemHTML))

            itemEle.find(".techItemText").append("<div class='techItemName'></div>")
            itemEle.find(".techItemText").append("<div class='techItemDesc'></div>")
            itemEle.find(".techItemText").append("<div class='techItemLinks'></div>")

            itemEle.find(".techItemName").text(sName)
            itemEle.find(".techItemDesc").text(sDesc)
            itemEle.find(".techItemLinks").html("<a href='" + slink + "' target='_new' >" + slink + "</a>")

            const itemImgHTML = "<div class='col techItemImg'></div>"

            // if (x % 2 === 0) {
                itemEle.find(".techItem").append(itemImgHTML)
            // } else {
                // itemEle.find(".techItem").prepend(itemImgHTML)
            // }


            const imgOb = $($.parseHTML("<img idx='" + x + "' src='" + sImg + "' alt='Screen shot:" + sName + "' />"))
            const vidOb = $($.parseHTML("<video autoplay loop muted src=''  />"))
            itemEle.find(".techItemImg").append(imgOb).append(vidOb)

            $("#techsList").append(itemEle)

            $("#techBack").append("<div class='techBack' style='background-image:url(" + sImg + ")'></div>")
        }

        $("#techBack").append("<div class='techBackGlass'></div>")

        var scroller = document.querySelector(".techsList")
        scroller.addEventListener('scrollsnapchange', event => {
            
            // console.log("change");
            if (event.snapTargetInline) {
                let thisIdx = event.snapTargetInline.attributes["idx"].value
                let thisTarget = event.snapTargetInline
                // console.log(thisIdx);

                $(".techItemHolder ").each(function (index) {
                    if (index.toString() !== thisIdx) {
                        $(".techItemHolder ").eq(index).removeClass("techChange").addClass("techItemSnap")
                        $(".techItemHolder ").eq(index).find("video")[0].pause()
                        $(".techItemHolder ").eq(index).find("video")[0].currentTime = 0
                    }else{
                        let sVid = snaps[1][thisIdx] ? snaps[1][thisIdx] : ''
                        $(thisTarget).find("video").attr("src", sVid)
                        $(thisTarget).find("video")[0].play();
                    }

                })
                // $(thisTarget).addClass("techChange").removeClass("techItemSnap")


                $(".techBack").each(function (index) {
                    $(".techBack").eq(index).removeClass("techChange")
                })

                $(".techBack").eq(thisIdx).addClass("techChange")

                // $(".techBackGlass").css({ "backdrop-filter": "grayscale(.6" })

                
            }
        });

        scroller.addEventListener('scrollsnapchanging', event => {
            // console.log("changeing");
            if (event.snapTargetInline) {
                let thisIdx = event.snapTargetInline.attributes["idx"].value
                let thisTarget = event.snapTargetInline
                // console.log(thisIdx);

                $(".techItemHolder ").each(function (index) {
                    $(".techItemHolder ").eq(index).removeClass("techChanging")
                })
                $(thisTarget).addClass("techChanging")

                $(".techBack").each(function (index) {
                    $(".techBack").eq(index).removeClass("techChanging")
                })
                $(".techBack").eq(thisIdx).addClass("techChanging")
            }
        });

        //setup observe on #techs to turn off effects if scrolled out
        let options = {
            root: null,
            threshold: [0, 0.1, 0.2, 1],
            rootMargin: '-10% 0% -10% 0%',
        };

        let showTechs = function (entries, observer) {
            // console.log("ob #techs")
            entries.forEach(entry => {
                const ratio = entry.intersectionRatio //entry.isIntersecting
                // console.log("ratio",ratio)
                //   entry.target.style.opacity = ratio

                  let ele = entry.target
                if (ratio > .8) {
                    // $("#techsList").removeClass("scrollsnapSelected")
                    // $(".techBackGlass").css({"backdrop-filter": "blur(0px)"})
                    $(".techBack").each(function (index) {
                        // $(".techBack").eq(index).addClass("techChange").addClass("techChanging")
                    })
                    $("#techBack").removeClass("hidden")
                    $("#threeBack").addClass("hidden")
                    

                }else{
                    // $(".techItemHolder ").eq(0).addClass("techChanging")
                    $(".techBack").each(function (index) {
                        // $(".techBack").eq(index).removeClass("techChange").removeClass("techChanging")
                    })
                    $("#techBack").addClass("hidden")
                    $("#threeBack").removeClass("hidden")
                }

            });
        }

        let observeShowTechs = new IntersectionObserver(showTechs, options)

        let target = document.querySelector("#techsList")
        observeShowTechs.observe(target)

    }

}, 300)



const Tech = () => {

    return (
        <div>
            <div id="techs" className="techs">
                <div id="techsTitle" className="techsTitle"></div>
                <div id="techsList" className="techsList"></div>
            </div>

        </div>
    )
}

export default Tech