
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

    var eWidth = $(window).width() * x / 2
    var eHeight = $(window).height() * y / 2

    var serviceEle = $($.parseHTML('<div id="serviceCategory" class="serviceCategory row flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '></div>'))

    serviceEle.append('<p>' + title + '</p>')

    $('#servicesCol').append(serviceEle)

    // $('#serviceCategory p').css({
    //     "transform": "translate(" + (eWidth).toString() + "px, " + (eHeight).toString() + "px) scale(0) rotate3d(" + (x).toString() + ", " + (y).toString() + ", " + (r).toString() + ", " + (r * 720).toString() + "deg)"
    // })

    serviceEle = $($.parseHTML('<div id="serviceList" class="serviceList row"></div>'))
    $('#servicesCol').append(serviceEle)

    for (let ind in servicesArrays) {
        const name = servicesArrays[ind][0]
        const desc = servicesArrays[ind][1]

        $("#serviceList").append('<div class="serviceItem'+ind+'"></div>')

        x = Math.random() * 2 - 1
        y = Math.random() * 2 - 1
        r = Math.random() * 2 - 1
        $(".serviceItem"+ind).append('<div class="serviceItemName flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '><p>' + name + '</p></div>')

        x = Math.random() * 2 - 1
        y = Math.random() * 2 - 1
        r = Math.random() * 2 - 1
        $(".serviceItem"+ind).append('<div class="serviceItemDescription flutter" data-x=' + x + ' data-y=' + y + ' data-r=' + r + '><p>' + desc + '</p></div>')
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