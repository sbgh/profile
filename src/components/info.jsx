
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

                                {/* className='carousel-dark slide' */}

                                <Carousel className='carousel-dark slide' >
                                    <Carousel.Item interval={20000}>
                                        
                                        {/* <ExampleCarouselImage text="First slide" /> */}

                                        <h1>About</h1>
                                        <p>IT professional with extensive knowledge and experience in a wide range if IT roles. Proven skills include application architecture and web development, systems administration, IT coordination, data management, automation script development, Dev-Ops and generation of reports and documentation. A highly motivated & positive individual that enjoys working in collaboration. Passionate about delivering excellence and helping the team and stakeholders with amazing technology. </p>

                                    </Carousel.Item>
                                    <Carousel.Item interval={10000}>

                                        <h1>HIGHLIGHTS OF QUALIFICATIONS/SKILLS </h1>
                                        <p>
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
                                        </p>

                                    </Carousel.Item>
                                    {/* <Carousel.Item>
                                        <ExampleCarouselImage text="Third slide" />
                                    </Carousel.Item> */}
                                </Carousel>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Info