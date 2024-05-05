// import { Link } from 'react-router-dom'

import $ from 'jquery';
import { FaLinkedin, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pic from '../assets/DSH_Profile-square_sm.png';
import ezstack from '../assets/ezstack.png';
import Mont from '../assets/pexels-eberhardgross-1062249.jpg';
// import Resume from '../assets/Scott_Hurd_Resume_online.docx';
import { BsDisplay } from 'react-icons/bs';

const Profile = () => {

    $("html head").prepend('<link rel="icon" type="image/png" href="' + ezstack + '">')
    $("body").prepend('<div id="cubeStore"></div><div id="background" class="background"> <img src=' + Mont + ' className="mont" /></div>')

    const backPic = { Pic }
    $("body").get(0).style.setProperty("--backPic", "url(" + backPic.Pic + ")")

    setTimeout(function () {

        $(".ProfileBtnRow.row div").each(function (index) {
            const eleObj = $($(".ProfileBtnRow.row div")[index])
            const delay = index * 500
            eleObj.css({
                "opacity": "1",
                "transition": "transform 500ms ease-out",
                "transition-delay": delay + "ms",
                "transform": "translateX(0)"
            });
        })

    }, 4000)

    return (

        <div>
            <div className="profilePicSection">

                <Container fluid>
                    <Row>
                        <Col className='profilePicCol'>

                            <Row className='profilePicRow'>
                                <img className="backPic" />
                                <img src={Pic} className="profilePic" />
                            </Row>
                            <Row className="justify-content-md-left">

                                <div className='profileText profileName'><h1>Scott Hurd</h1></div>
                                <div className='profileText profileTag'><h2>Husband, father of 3, Software Engineer, UI Developer and System Administrator.</h2></div>
                                <div className='profileText profileLocation'><p>Calgary, Alberta, Canada</p></div>
                            </Row>
                            <Row className='ProfileBtnRow'>
                                {/* <div className='profileBtn profileRes'><a href={Resume} download="Scott_Hurd_Resume.docx">< FaCloudDownloadAlt className='profileFa' />Resume</a></div> */}
                                <div className='profileBtn liLink'><a href='https://www.linkedin.com/in/scott-hurd-calgary/' target='_new'>< FaLinkedin className='profileFa' /></a></div>
                                <div className='profileBtn ghLink'><a href='https://github.com/sbgh' target='_new'>< FaGithub className='profileFa' /></a></div>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Profile