
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNav = ({ supportButtonClicked, loginButtonClicked }) => {
    const handleSupportShow = () => {
        {supportButtonClicked()}
      };
      const handleLoginShow = () => {
        {loginButtonClicked()}
      };
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary nav">
            <Container>
                <Navbar.Brand href="/">EZSTACK SYSTEMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="">
                        <Nav.Link href="#" onClick={() => handleSupportShow() }>Support</Nav.Link>
                        <Nav.Link href="#" onClick={() => handleLoginShow() }>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNav