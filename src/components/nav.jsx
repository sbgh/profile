
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNav = ({ supportButtonClicked, loginButtonClicked }) => {

    const handleSupportShow = () => {
        { supportButtonClicked() }
    };
    const handleLoginShow = () => {
        { loginButtonClicked() }
    };
    const handledsStackShow = () => {

        // console.log( window.location.protocol + '//' + window.location.hostname.split(":")[0] + ':8443' + '/#')

        window.open("https:" + '//' + window.location.hostname.split(":")[0] + ':8443' + '/', '_new');

    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary nav">
            <Container>
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >

                    <div className="col-auto">
                        <div className="open-menu">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="">
                        <Nav.Link href="#" onClick={() => handleSupportShow()}>Support</Nav.Link>
                        <Nav.Link href="#" onClick={() => handleLoginShow()}>Login</Nav.Link>
                        {/* <Nav.Link href="#" onClick={() => handledsStackShow()}>dsStack</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNav