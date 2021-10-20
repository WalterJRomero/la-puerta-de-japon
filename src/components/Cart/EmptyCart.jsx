import {Link} from 'react-router-dom'
import Nav from "react-bootstrap/Nav"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import {cartEmptyImg} from '../../utils/mock'

//este componente muestra la leyenda que no hay items agregados en el carrito, ademas redirecciona al usuario al menu principal 
function EmptyCart() {
    return (
        <Container fluid className="mt-5 p-5">
            <Card style={{ maxHeight: '22rem' , justifyContent:'center', alignItems:'center'}}>     
                <Card.Img variant="top" src={cartEmptyImg} style={{ maxHeight: '10rem',maxWidth:'11rem'}}/>           
                <Card.Title className=" h2 display-4 text-muted lead">Aún no tenes productos en tu carrito</Card.Title>
                <Nav.Link as={Link} to="/">Acá podes ver todos los productos que tenemos para vos</Nav.Link>
            </Card>
        </Container>    
    )}

export default EmptyCart
