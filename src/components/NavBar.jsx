import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBar(){
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">La puerta de Japón</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Pasajes</Nav.Link>
      <Nav.Link href="#features">Paquetes</Nav.Link>
      <Nav.Link href="#pricing">Excursiones</Nav.Link>
      <Nav.Link href="#pricing">Pases de transporte</Nav.Link>
      <Nav.Link href="#pricing">Alojamientos</Nav.Link>
    </Nav>
    </Container>
  </Navbar>  
</>
    )
}

export default NavBar