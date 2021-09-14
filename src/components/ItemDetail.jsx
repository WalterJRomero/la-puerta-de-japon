import {Card, ButtonGroup, Button} from "react-bootstrap"

function ItemDetail({item}) {

    return (
    <>       
        <Card border="danger" className="m-5" key={item.id} style={{width:'18rem'}}>
            <Card.Header className="fw-bold">{item.title}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Title>{item.description}</Card.Title>
                <Card.Text>Precio u$s: {item.price}</Card.Text>                
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" >Detalles</Button>                        
                </ButtonGroup>
            </Card.Body>
        </Card>            
    </>
    )
}

export default ItemDetail
