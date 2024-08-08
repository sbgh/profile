
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

    var serviceEle = $($.parseHTML('<div id="serviceCategory" class="serviceCategory row"></div>'))
    serviceEle.append('<p>' + title + '</p>')
    $('#servicesCol').append(serviceEle)

    serviceEle = $($.parseHTML('<div id="serviceList" class="serviceList row"></div>'))
    $('#servicesCol').append(serviceEle)

    for (let x in servicesArrays) {
        const name = servicesArrays[x][0]
        const desc = servicesArrays[x][1]

        $("#serviceList").append('<div class="serviceItem"><p class="serviceItemName">' + name + '</p><p class="serviceItemDescription">' + desc + '</p></div>')
    }

}, 200, title, servicesArrays)

const Services = () => {

    return (
        <div>
            <div className="servicesSection">
                <Container fluid>
                    <Row>
                        <Col id='servicesCol' className='servicesCol'></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Services