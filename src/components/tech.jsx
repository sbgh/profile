

import snaps from './snaps'

import $ from 'jquery';
// import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'These are some of the projects that we have worked on'
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
            let sImg = snaps[x]

            const itemHTML = "<div idx='" + x + "' class='techItemHolder'><div class='row techItem'><div class='col-sm-12 col-md-6 techItemText'></div></div></div>"

            const itemEle = $($.parseHTML(itemHTML))

            itemEle.find(".techItemText").append("<div class='techItemName'></div>")
            itemEle.find(".techItemText").append("<div class='techItemDesc'></div>")
            itemEle.find(".techItemText").append("<div class='techItemLinks'></div>")

            itemEle.find(".techItemName").text(sName)
            itemEle.find(".techItemDesc").text(sDesc)
            itemEle.find(".techItemLinks").html("<a href='" + slink + "' target='_new' >" + slink + "</a>")

            const itemImgHTML = "<div class='col-sm-12 col-md-6 techItemImg'></div>"

            if (x % 2 === 0) {
                itemEle.find(".techItem").append(itemImgHTML)
            } else {
                itemEle.find(".techItem").prepend(itemImgHTML)
            }


            const imgOb = $($.parseHTML("<img idx='" + x + "' src='" + sImg + "' alt='Screen shot:" + sName + "' />"))
            itemEle.find(".techItemImg").append(imgOb)

            $("#techsList").append(itemEle)
            $("#techBack").append("<div class='techBack' style='background-image:url(" + sImg + ")'></div>")

            $(".techBack").each(function (index) {
                $(".techBack").eq(index).css({ "opacity": "0" })
            })

        }

        $("#techBack").append("<div class='techBackGlass'></div>")

        var scroller = document.querySelector(".scroller")
        scroller.addEventListener('scrollsnapchange', event => {

            if (event.snapTargetBlock) {
                let thisIdx = event.snapTargetBlock.attributes["idx"].value
                console.log(thisIdx);

                $("#techs").addClass("scrollsnapSelected")

                $(".techBack").each(function (index) {
                    $(".techBack").eq(index).css({ "opacity": "0" })
                })

                $(".techBack").eq(thisIdx).css({ "opacity": ".3" })

                // $(".techItemHolder img").each(function (index) {
                //     let thisIdx = event.snapTargetBlock.attributes["idx"].value
                //     if (thisIdx == index.toString()) {
                //         $(event.snapTargetBlock).addClass("scrollsnapSelected")
                //     } else {
                //         $(".techItemHolder img").eq(index).removeClass("scrollsnapSelected")
                //     }
                // });
            }

        });

        //setup observe on about and contactForm
        let options = {
            root: null,
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.00],
            rootMargin: '-8% 0% -10% 0%',
        };

        let showTechs = function (entries, observer) {
            entries.forEach(entry => {
                const ratio = entry.intersectionRatio //entry.isIntersecting
                //   entry.target.style.opacity = ratio

                //   let ele = entry.target
                if (ratio < .2) {
                    $("#techs").removeClass("scrollsnapSelected")
                    $(".techBack").each(function (index) {
                        $(".techBack").eq(index).css({ "opacity": "0" })
                    })
                }

            });
        }

        let observeShowTechs = new IntersectionObserver(showTechs, options)

        let target = document.querySelector("#techs")
        observeShowTechs.observe(target)

    }

}, 300)



const Tech = () => {

    return (
        <div>
            <div id="techs" className="techs">
                <div id="techBack" ></div>
                <div id="techsTitle" className="techsTitle"></div>
                <div id="techsList" className="techsList"></div>
            </div>

        </div>
    )
}

export default Tech