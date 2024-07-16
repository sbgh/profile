
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

                                <p>IT Services</p>

                            </Row>
                            <Row className='serviceList'>
                                <p>Full Stack Web Application Design and Development</p>
                                <p>Web Application Modernization and Integration</p>
                                <p>Cloud Management</p>
                                <p>Infrastructure Consulting</p>
                                <p>Automation and Scripting</p>


                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Services