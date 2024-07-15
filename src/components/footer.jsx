
import $ from 'jquery';
import { FaLinkedin, FaCloudDownloadAlt, FaGithub, FaCopyright } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
// import { BsDisplay } from 'react-icons/bs';

const Footer = () => {



    return (

        <div className="footerSection">

            <div className="footerItem"> < FaCopyright className='footerFa' /> Copyright 2024 </div>
            <div className="footerItem footerItemRight">
                <a href='https://www.linkedin.com/in/scott-hurd-calgary/' target='_new'><div className='footerBtn liLink'>< FaLinkedin className='footerFa' /></div></a>
                <a href='https://github.com/sbgh' target='_new'><div className='footerBtn ghLink'>< FaGithub className='footerFa' /></div></a>
            </div>
            {/* <div className="footerItem">   </div> */}

        </div>

    )
}

export default Footer