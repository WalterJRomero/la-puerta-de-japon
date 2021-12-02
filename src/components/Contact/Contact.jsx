import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import {officeImg} from "../../utils/mock"
import { AiFillLinkedin , AiFillGithub } from "react-icons/ai";

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
            <Container fluid style={{display:'flex' ,justifyContent:'center', textAlign:'center'}}>
                <Card border="danger" className="m-5 shadow p-3 bg-white rounded" style={{maxWidth:'30rem'}} >
                    <Card.Header className="fw-bold">Creado por </Card.Header>                    
                    <Card.Body>                          
                        <Card.Text>
                            <AiFillLinkedin className="h4"/>                            
                            <a href ="https://www.linkedin.com/in/walter-romero-b0630176/" target="_blank" rel="noreferrer">Walter Romero</a>
                        </Card.Text>
                        <Card.Text>
                            <AiFillGithub className="h4"/>                            
                            <a href ="https://github.com/WalterJRomero" target="_blank" rel="noreferrer">Walter Romero</a>
                        </Card.Text>
                    </Card.Body>
                </Card>                  
            </Container>
        </>
    )
}

export default Contact