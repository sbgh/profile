
import $ from 'jquery';
// import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'This is some of the tech that we have implemented recently'
const techsList = `
User-Friendly Design (UX/UI)
We ensure the website is intuitive and easy to navigate with clear categories, a responsive layout, fast-loading pages, and a smooth checkout process across all devices.
Mobile Responsiveness
The site will be fully optimized for mobile with a seamless, responsive design.
Security
Strong encryption (e.g., SSL certificates) and secure payment gateways to protect user data and build trust, especially regarding personal and payment information.
Product Information and Visuals
We provide detailed product descriptions, high-quality images, and videos to give customers confidence in their purchase decisions.
Payment Gateway Integration
Multiple secure payment options (credit cards, digital wallets, bank transfers) to cater to various customer preferences globally.
Site Performance and Speed
Optimized images, caching. We ensure the hosting environment can handle traffic spikes to maintain fast page load speeds.
SEO and Digital Marketing
Optimize for relevant keywords, meta tags, and schema markup. Digital marketing strategies (e.g., email marketing, social media, and paid ads) to attract traffic.
Scalability
Website infrastructure to support growth, including the ability to handle more products, customers, and higher traffic without compromising performance.
Inventory Management
Efficient inventory system to sync with sales and update stock levels in real-time. 
Customer Support and Returns Policy
Easy access to customer service (live chat, FAQs, contact forms) and a clear, customer-friendly returns and refund policy to enhance customer trust and satisfaction.
`

const techsArr = techsList.split("\n").filter(function(e){return e}); 

setTimeout(function () {


    let twoDeeArr = []
    while (techsArr.length) twoDeeArr.push(techsArr.splice(0, 2))

    if (techsArr.length % 2 == 0) {
        for (let x in twoDeeArr) {

            let sName = twoDeeArr[x][0]
            let sDesc = twoDeeArr[x][1]
            // let sImg = techsImgArr[x]

            const itemHTML = "<div class='row techItem'><div class='col col-12 col-md-6 col-lg-4 techItemText'><div class='techItemName'></div><h3 class='techItemDesc'></h3></div></div>"

            const itemEle = $($.parseHTML(itemHTML))
            itemEle.find(".techItemName").text(sName)
            itemEle.find(".techItemDesc").text(sDesc)

            const itemImgHTML = "<div class='col col-12 col-md-6 col-lg-4  techItemImg'></div>"
            if (x % 2 === 0) {
                itemEle.append(itemImgHTML)
                itemEle.find(".techItemText").addClass("offset-lg-2")
            } else {
                itemEle.prepend(itemImgHTML)
                itemEle.find(".techItemImg").addClass("offset-lg-2")
            }

            itemEle.find(".techItemImg").css({
                // "background-image": "url(" + sImg + ")"
            })

            $("#techsList").append(itemEle)
        }
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