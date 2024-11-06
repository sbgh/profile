
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
                            <p>ezStack Systems is IT professional services. Headquartered in Calgary, Alberta, Canada since 2018, We offer technology solutions for small and medium sized organizations. We can provide skill sets in web app design and development, cloud resource management and automation, enterprise app support and systems administration, dev/ops, test support.</p>
                            <p>D. Scott Hurd CEO</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Info