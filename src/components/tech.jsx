

import snaps from './snaps'

import $ from 'jquery';
// import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'These are some of the projects that we have worked on recently'
const techsList = `
WordPress Custom theme (Professional Services)
Stylish WordPress theme with hand coded 3D effects and responsive design. Plugins include Advanced Custom Fields for content management and WP Mail SMTP for online messaging.
https://kilanicorp.com/
WordPress Custom Theme (Hospitality)
Amazing looking multiple page web site for an Inn. Features complex reservation form, many animation effects and a perfect flow.
https://theinncalgary.com/
dsStack Data Science Environment Builder
Complex Graphical User Interface and Node.js server. This Free Open Source application has the ability to connect to cloud servers and provision them with packages used by data scientists. Things like Docker, Steamlit and more. 
https://ezstacksystems.com:8443/
ezStack Automated Web server Application Builder
An even more complex Free Open Source application made with Node.js. Used to build web application, and manage servers, with a building-blocks approach. 
https://github.com/sbgh/builder
`

const techsArr = techsList.split("\n").filter(function (e) { return e }); //split tech list lines into array and filter out empty items

setTimeout(function () {

    $("#techsList").html("")

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
                // itemEle.find(".techItemText").addClass("offset-lg-2")
            } else {
                itemEle.find(".techItem").prepend(itemImgHTML)
                // itemEle.find(".techItemImg").addClass("offset-lg-2")
            }


            const imgOb = $($.parseHTML("<img idx='" + x + "' src='" + sImg + "' alt='Screen shot:" + sName + "' />"))
            itemEle.find(".techItemImg").append(imgOb)

            $("#techsList").append(itemEle)

            // const numOfItems = twoDeeArr.length
            // const sWidth = $("body").width()
            // const lWidth = $("#techs").width()

            // $(".techItem").each(function (index) {
            //     let xTrans = lWidth / numOfItems * (index) * 7.5 + sWidth / 3
            //     $( this ).css({"transform": "perspective(50px) translate3d("+ -xTrans +"px, -230px, -50px)"})
            // });


        }

        // var scroller = document.querySelector(".scroller")
        // scroller.addEventListener('scrollsnapchanging', event => {

        //     if (event.snapTargetBlock) {
        //         console.log(event.snapTargetBlock.attributes["idx"].value);

        //         $(".techItemHolder img").each(function (index) {
        //             let thisIdx = event.snapTargetBlock.attributes["idx"].value
        //             if (thisIdx == index.toString()) {
        //                 $(event.snapTargetBlock).addClass("scrollsnapSelected")
        //             } else {
        //                 $(".techItemHolder img").eq(index).removeClass("scrollsnapSelected")
        //             }

        //         });
        //     }

        // });
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