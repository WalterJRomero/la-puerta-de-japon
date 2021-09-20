import {Card} from "react-bootstrap"
import ItemCount from "./ItemCount"

function ItemDetail({item}) {

    const onAdd =(cant)=>{
        console.log(cant)
    }
     
    return (
        <>       
            <h1 className='text-danger'>Detalles del producto</h1> 
            <Card border="danger" className="m-5" key={item.id} style={{width:'18rem'}}>              
                <Card.Header className="fw-bold">{item.title}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={item.pictureUrl} />
                    <Card.Title>{item.shortDescription}</Card.Title>
                    <Card.Text>Precio u$s: {item.price}</Card.Text>     
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>                
                </Card.Body>
            </Card>            
        </>
    )
}

export default ItemDetail
