import {Card, ButtonGroup, Button,Nav} from "react-bootstrap"
import '../styles/item.css';

function Item({item}) {
    const {id,category,title,shortDescription,price,pictureUrl} = item  
    
    return (
        <>          
            <Card border="danger" className="m-5" key={id} style={{width:'18rem'}}>
                <Card.Header className="fw-bold" >{title}</Card.Header>
                <Card.Body>
                    <Nav.Link href={`/item/${id}`} className="img-detail">
                        <Card.Img variant="top" src={pictureUrl} className="img-detail "/>
                    </Nav.Link>
                    <Nav.Link href={`/item/${id}`}>
                        <Card.Title className="m-1 p-1">{shortDescription}</Card.Title>
                    </Nav.Link>
                    <Card.Text>Precio u$s: {price}</Card.Text>                 
                    <Nav.Link href={`/item/${id}`}>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" >Detalles</Button>                        
                        </ButtonGroup>                    
                    </Nav.Link>
                </Card.Body>
            </Card>            
        </>
    )
}

export default Item
