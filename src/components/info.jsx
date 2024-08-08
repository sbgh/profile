
import $ from 'jquery';
import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


const Info = () => {

    return (
        <div>
            <div className="profileTextSection">
                <Container fluid>
                    <Row>
                        <Col className='about'>
                            <Row className='profileText'>



                            <h1>About</h1>
                            <p>ezStack Systems is IT professional services. Headquartered in Calgary, Alberta, Canada since 2018, We offer technology solutions for small and medium sized organizations. We can provide skill sets in web app design and development, cloud resource management and automation, enterprise app support and systems administration, dev/ops, test support.</p>
                            <p>D. Scott Hurd CEO</p>


                                {/* <Carousel className='carousel-dark slide' >
                                    <Carousel.Item interval={20000}>

                                        <h1>About</h1>
                                        <p>IT professional with extensive knowledge and experience in a wide range if IT roles. Proven skills include application architecture and web development, systems administration, IT coordination, data management, automation script development, Dev-Ops and generation of reports and documentation. A highly motivated & positive individual that enjoys working in collaboration. Passionate about delivering excellence and helping the team and stakeholders with amazing technology. </p>

                                    </Carousel.Item>
                                    <Carousel.Item interval={10000}>

                                        <h1>HIGHLIGHTS OF QUALIFICATIONS/SKILLS </h1>
                                            <ul>
                                                <li>IT consultanting</li>
                                                <li>IT architecture</li>
                                                <li>Project leadership and planning</li>
                                                <li>Web application design & development</li>
                                                <li>RHEL & Ubuntu & Windows</li>
                                                <li>HTML5/CSS3</li>
                                                <li>Systems administration</li>
                                                <li>Certified IBM IT Specialist</li>
                                            </ul>

                                    </Carousel.Item>
                                </Carousel> */}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Info