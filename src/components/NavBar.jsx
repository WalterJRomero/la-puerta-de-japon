import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'

function NavBar(){
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="d-flex justify-content-end">
                <Container>
                    <Nav.Link href="/">
                        <Navbar.Brand>La puerta de Japón</Navbar.Brand>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/categoria/paquetes">Paquetes de viajes</Nav.Link>
                            <Nav.Link href="/categoria/excursiones">Excursiones</Nav.Link>
                            <Nav.Link href="/categoria/pases">Pases de Transporte</Nav.Link>                       
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Nav.Link href="/cart" >
                    <CartWidget />                    
                </Nav.Link>
            </Navbar>
        </>
    )
}

export default NavBar