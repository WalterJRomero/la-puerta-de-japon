import {Card, ButtonGroup, Button,Nav} from "react-bootstrap"
import '../styles/item.css';

function Item({item}) {

    const {id,title,shortDescription,price,pictureUrl} = item  
    
    return (
        <>      
            <Card border="danger" className="m-5 shadow mb-5 card-item bg-white rounded" key={id} style={{width:'18rem'}}>
                <Nav.Link href={`/item/${id}`}>
                    <Card.Header className="fw-bold text-muted" >{title}</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" src={pictureUrl} className="img-detail "/>                  
                        <Card.Text className='p-2 m-1 fw-bold h5'>u$s:{price}</Card.Text>                 
                        <Card.Title className="m-1 p-1 lead text-muted">{shortDescription}</Card.Title>
                        <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary" >Detalles</Button>                        
                        </ButtonGroup>                       
                    </Card.Body>
                </Nav.Link>
            </Card>            
        </>
    )
}

export default Item
