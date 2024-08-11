
import $ from 'jquery';
import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'We Do IT Services'
const servicesArrays = []
servicesArrays.push(['Full Stack Web Application Design and Development',
    'We specialize in web applications with rich UIs and functionality.'])

servicesArrays.push(['Web Application Modernization and Integration',
    'Our technology can seamlessly integrate with existing systems because of our detailed, hand crafted approach.'])

servicesArrays.push(['Cloud Management',
    'We have expertise in Cloud management and automation. We can provide for a variety of hosting options with the intent of keeping your web presence independent and secure.'])

servicesArrays.push(['Infrastructure Consulting',
    'Besides web applications we are also experts in systems administration and enterprise software management. Our skills range from bare metal deployments to configuration management.'])

servicesArrays.push(['Automation and Scripting',
    'We have lots of experience creating detailed code to handle complex tasks. We\'ll make your business processes go from pain to perfect. '])

setTimeout(function (title, servicesArrays) {

    var x = Math.random() * 2 - 1
    var y = Math.random() * 2 - 1
    var r = Math.random() * 2 - 1

    var serviceEle = $($.parseHTML('<div id="serviceCategory" class="serviceCategoryRow"></div>'))

    $('#servicesCol').append(serviceEle)
    
    for(let n in title.split(" ")){
        x = Math.random() * 2 - 1
        y = Math.random() * 2 - 1
        r = Math.random() * 2 - 1
        let wrd=title.split(" ")[n]
        wrd = wrd +  "&nbsp;" 
        $("#serviceCategory" ).append('<div class="serviceCategory flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '><span>' + wrd + '</span></div>')    
    }


    serviceEle = $($.parseHTML('<div id="serviceList" class="serviceList row"></div>'))
    $('#servicesCol').append(serviceEle)

    for (let ind in servicesArrays) {
        const name = servicesArrays[ind][0]
        const desc = servicesArrays[ind][1]

        $("#serviceList").append('<div class="serviceItem serviceItem'+ind+'"><div class="serviceItemNameHolder"></div><div class="serviceItemDescHolder"></div></div>')

        for(let n in name.split(" ")){
            x = Math.random() * 2 - 1
            y = Math.random() * 2 - 1
            r = Math.random() * 2 - 1
            let wrd=name.split(" ")[n]
            wrd = wrd +  "&nbsp;" 
            $(".serviceItem"+ind+" .serviceItemNameHolder" ).append('<span class="serviceItemName flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '><span>' + wrd + '</span></span>')    
        }

        for(let n in desc.split(" ")){
            x = Math.random() * 2 - 1
            y = Math.random() * 2 - 1
            r = Math.random() * 2 - 1
            let wrd=desc.split(" ")[n]
            wrd = wrd +  "&nbsp;" 
            $(".serviceItem"+ind+" .serviceItemDescHolder").append('<span class="serviceItemDescription flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '><span>' + wrd + '</span></span>')
        }
    }

}, 200, title, servicesArrays)

const Services = () => {

    return (
        <div>
            <div className="servicesSection">
                <Container fluid>
                    <Row>
                        <Col id='servicesCol' className='servicesCol'>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Services