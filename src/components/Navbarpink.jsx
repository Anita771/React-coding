import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default function Navbarpink() {


    return (
        <>
            <Navbar className='navbarpink1'>
                <Container>
                    <Link to='/'>
                        <div>

                            <img className="stylelogo" src="./images/logo.jpg" alt="" width="75" height="75" />
                        </div>
                    </Link>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}