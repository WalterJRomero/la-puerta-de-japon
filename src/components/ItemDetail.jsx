import {Card,Container,Row} from "react-bootstrap"
import ItemCount from "./ItemCount"

function ItemDetail({item}) {

    const onAdd =(cant)=>{
        console.log(cant)
    }
     
    return (
        <>       
            <h1 className='text-danger'>Detalles del producto</h1> 
            <Container className="container d-flex justify-content-center align-item-center h-100 ">
                <Row className="justify-content-center">
                    <Card border="danger" className="m-5" key={item.id} style={{width:'20rem'}}>              
                        <Card.Header className="fw-bold">{item.title}</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={item.pictureUrl}/>
                            <Card.Text>{item.shortDescription}</Card.Text>                        
                            <Card.Text>Precio u$s: {item.price}</Card.Text>     
                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>                
                        </Card.Body>                
                    </Card>
                </Row>
                <Row className="justify-content-center">
                    <Card border="danger" className="m-5" >
                        <Card.Header className="fw-bold">Descripción del producto</Card.Header>
                        <Card.Body>     
                            <Card.Text>{item.longDescription}</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>         
        </>
    )
}

export default ItemDetail
