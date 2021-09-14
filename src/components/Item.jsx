import {Card, ButtonGroup, Button} from "react-bootstrap"

function Item({item}) {

    const {id,title,description,price,pictureUrl} = item    
    return (
    <>          
        <Card border="danger" className="m-5" key={id} style={{width:'18rem'}}>
            <Card.Header className="fw-bold">{title}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Title>{description}</Card.Title>
                <Card.Text>Precio u$s: {price}</Card.Text>                
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" >Detalles</Button>                        
                </ButtonGroup>
             </Card.Body>
        </Card>            
    </>
    )
}

export default Item
