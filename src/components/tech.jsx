

import snaps from './snaps'

import $ from 'jquery';
// import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'This is some of the tech that we have implemented recently'
const techsList = `
WordPress Custom theme
lipsom orm sdjfhksh
WordPress Custom theme
lipsom orm sdjfhksh
dsStack Data Science Environment Builder
lipsom orm sdjfhksh
ezStack Automated Web server Application Builder
lipsom orm sdjfhksh
`

const techsArr = techsList.split("\n").filter(function (e) { return e }); //split tech list lines into array and filter out empty items

setTimeout(function () {

    let twoDeeArr = []
    while (techsArr.length) twoDeeArr.push(techsArr.splice(0, 2))

    if (techsArr.length % 2 == 0) {
        for (let x in twoDeeArr) {

            let sName = twoDeeArr[x][0]
            let sDesc = twoDeeArr[x][1]
            let sImg = snaps[x]

            const itemHTML = "<div idx='" + x + "' class='techItemHolder'><div class='row techItem'><div class='col techItemText'><div class='techItemName'></div></div></div></div>"

            const itemEle = $($.parseHTML(itemHTML))
            // itemEle.find(".techItemName").text(sName)
            // itemEle.find(".techItemDesc").text(sDesc)

            const itemImgHTML = "<div class='col techItemImg'></div>"
            itemEle.find(".techItem").prepend(itemImgHTML)

            itemEle.find(".techItemImg").append(
                "<img idx='" + x + "' src='" + sImg + "' alt='Screen shot:" + sName + "' />"
            )

            $("#techsList").append(itemEle)
        }
        const numOfItems = twoDeeArr.length
        const sWidth = $("body").width()
        const lWidth = $("#techs").width()

        $(".techItem").each(function (index) {
            let xTrans = lWidth / numOfItems * (index) * 7.5 + sWidth / 3
            // $( this ).css({"transform": "perspective(50px) translate3d("+ -xTrans +"px, -230px, -50px)"})
        });


    }

    var scroller = document.querySelector(".scroller")
    scroller.addEventListener('scrollsnapchanging', event => {

        // console.log(event.snapTargetBlock);
        if (event.snapTargetBlock) {
            console.log(event.snapTargetBlock.attributes["idx"].value);

            $(".techItemHolder img").each(function (index) {
                let thisIdx = event.snapTargetBlock.attributes["idx"].value
                if (thisIdx == index.toString()) {
                    $(event.snapTargetBlock).addClass("scrollsnapSelected")
                } else {
                    $(".techItemHolder img").eq(index).removeClass("scrollsnapSelected")
                }

            });
        }

    });

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