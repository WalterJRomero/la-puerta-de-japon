import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'

function NavBar(){
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">La puerta de Japón</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#pasajes">Pasajes</Nav.Link>
                            <Nav.Link href="#paquetes">Paquetes</Nav.Link>
                            <Nav.Link href="#excursiones">Excursiones</Nav.Link>
                            <Nav.Link href="#pases">Pases de transporte</Nav.Link>
                            <Nav.Link href="#alojamientos">Alojamientos</Nav.Link>        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Container  className="d-flex justify-content-end m-1">
                    <CartWidget />
                </Container> 
            </Navbar>
        </>
    )
}
export default NavBar