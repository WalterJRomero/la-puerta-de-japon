import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

function NavBar(){
    
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="d-flex justify-content-end">
                <Container>                    
                    <Nav.Link as={Link} to="/">
                        <Navbar.Brand>La puerta de Japón</Navbar.Brand>                    
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/category/paquetes">Paquetes de viajes</Nav.Link>

                            <Nav.Link as={Link} to="/category/excursiones">Excursiones</Nav.Link>

                            <Nav.Link as={Link} to="/category/pases">Pases de Transporte</Nav.Link>                       
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Nav.Link as={Link} to= "/cart" >
                    <CartWidget />                    
                </Nav.Link>
            </Navbar>
        </>
    )
}

export default NavBar