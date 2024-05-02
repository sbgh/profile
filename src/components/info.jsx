
import $ from 'jquery';
import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Info = () => {

    return (
        <div>
            <div className="profileTextSection">
                <Container fluid>
                    <Row>
                        <Col className='about'>
                            <Row className='profileText'>
                                <h1>About</h1>
                                <p>IT professional with extensive knowledge and experience in a wide range if IT roles. Proven skills include application architecture and web development, systems administration, IT coordination, data management, automation script development, Dev-Ops and generation of reports and documentation. A highly motivated & positive individual that enjoys working in collaboration. Passionate about delivering excellence and helping the team and stakeholders with amazing technology. </p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Info