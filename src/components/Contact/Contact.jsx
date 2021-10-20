import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import {officeImg} from "../../utils/mock"

// componente que muestra seccion de contacto
function Contact() {
    return (
        <>
            <Container fluid style={{display:'flex' ,justifyContent:'center', textAlign:'center'}}>
                <Card border="danger" className="m-5 shadow p-3 bg-white rounded" style={{maxWidth:'30rem'}} >
                    <Card.Header className="fw-bold">Contacto</Card.Header>
                    <Card.Img variant="top" src={officeImg} className="" /> 
                    <Card.Body>     
                        <Card.Text> Por favor comunícate con nosotros en caso de consulta</Card.Text>
                        <Card.Text> Email: lapuertadejapon@gmail.com</Card.Text>
                        <Card.Text> Teléfono: +541112345678</Card.Text>
                    </Card.Body>
                </Card>
            </Container>   
        </>
    )
}

export default Contact