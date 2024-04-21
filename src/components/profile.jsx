// import { Link } from 'react-router-dom'

import $ from 'jquery';
import { FaLinkedin, FaCloudDownloadAlt } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Pic from '../assets/DSH_Profile-square_sm.png';
import ezstack from '../assets/ezstack.png';
import Resume from '../assets/Scott_Hurd_Resume_online.docx';

const Profile = () => {

    $("html head").prepend('<link rel="icon" type="image/png" href="' + ezstack + '">')

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Row className='profilePicRow'>
                            <img src={Pic} className="profilePic" />
                        </Row>
                        <Row className="justify-content-md-left">
                            <div className='profileName'><h1>Scott Hurd</h1></div>
                            <div className='profileTextRow profileLocation'><p>Calgary, Alberta, Canada</p></div>
                            <div className='profileTextRow profileRes'><a href={Resume} download="Scott_Hurd_Resume.docx">< FaCloudDownloadAlt className='profileFa' />Resume</a></div>

                            <div className='profileTextRow liRow'><a href='https://www.linkedin.com/in/scott-hurd-calgary/' target='_new'>< FaLinkedin className='profileFa' />LinkedIn</a></div>
                        </Row>
                    </Col>
                    <Col className='profileText'>
                        <Row>
                            <h1>About</h1>
                            <p>IT professional with extensive knowledge and experience in a wide range if IT roles. Proven skills include application architecture and web development, systems administration, IT coordination, data management, automation script development, Dev-Ops and generation of reports and documentation. A highly motivated & positive individual that enjoys working in collaboration. Passionate about delivering excellence and helping the team and stakeholders with amazing technology. </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile