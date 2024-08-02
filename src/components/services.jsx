
import $ from 'jquery';
import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Services = () => {

    return (
        <div>
            <div className="servicesSection">
                <Container fluid>
                    <Row>
                        <Col className='servicesCol'>
                            <Row className='serviceCategory'>

                                <p>We Do IT Services</p>

                            </Row>
                            <Row className='serviceList'>
                                <div class="serviceItem">
                                    <p class="serviceItemName">Full Stack Web Application Design and Development</p>
                                    <p class="serviceItemDescription">We specialize in web applications with rich UIs and functionality. </p>
                                </div>
                                <div class="serviceItem">
                                    <p class="serviceItemName">Web Application Modernization and Integration</p>
                                    <p class="serviceItemDescription">Our technology can seamlessly integrate with existing systems because of our detailed, hand crafted approach. </p>
                                </div>
                                <div class="serviceItem">
                                    <p class="serviceItemName">Cloud Management</p>
                                    <p class="serviceItemDescription">We have expertise in Cloud management and automation. We can provide for a variety of hosting options with the intent of keeping your web presence independent and secure.</p>
                                </div>
                                <div class="serviceItem">
                                    <p class="serviceItemName">Infrastructure Consulting</p>
                                    <p class="serviceItemDescription">Besides web applications we are also experts in systems administration and enterprise software management. Our skills range from bare metal deployments to configuration management.</p>
                                </div>
                                <div class="serviceItem">
                                    <p class="serviceItemName">Automation and Scripting</p>
                                    <p class="serviceItemDescription">We have lots of experience creating detailed code to handle complex tasks. We'll make your business processes go from pain to perfect. </p>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Services