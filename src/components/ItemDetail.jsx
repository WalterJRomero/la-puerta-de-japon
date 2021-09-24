import {Card,Container,Row} from "react-bootstrap"
import ItemCount from "./ItemCount"
import {useCartContext} from "../context/CartContext"
import {useState,useContext} from "react"
import {ContextApp} from "../App"

function ItemDetail({item}) {
    
    const {addToCart} = useCartContext()
    const {state} = useContext(ContextApp)

    const onAdd =(cant)=>{
        
        addToCart({item:item,cantidad:cant})
    }
    

    return (
        <>       
            <h1 className='text-danger m-3' >Conoce mas</h1> 
            <Container className="container d-flex justify-content-center align-item-center h-100">
                <Row className="justify-content-center">
                    <Card border="danger" className="m-5 shadow p-3 bg-white rounded" key={item.id} style={{width:'20rem'}}>              
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
                    <Card border="danger" className="m-5 shadow p-3 bg-white rounded" >
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
