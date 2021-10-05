import {Card,Container,Row} from "react-bootstrap"
import ItemCount from "./ItemCount"
import { useCartContext } from "../context/CartContext"
import "../styles/ItemDetail.css"
function ItemDetail({item}){
    
    const {addToCart} = useCartContext()


    //codigo de prueba
// const{addToCart,isInCart,cartList,totalQ} = useCartContext()    
//--ACA VALIDARIA QUE LA CANTIDAD QUE QUIERE INGRESAR EL USUARIO NO SUPERE AL STOCK DISPONIBLE,
// POR EJEMPLO SI STOCK ES 10 , QUE NO ME DEJE AGREGAR MAS DE 10, AHORA ESTA PASANDO QUE SI VUELVO A ENTRAR AL COMPONENTE ME DEJA AGREGAR OTROS 10 
    // let posicionId = isInCart(item.id)
    // let cantidadEncontrada  
    // if (posicionId ==-1){
    //     console.log('no encontro el objeto')                    
    // }
    // else {
    //     console.log(`esta es la cantidad encontrada`,cantidadEncontrada)        
    //     cantidadEncontrada = cartList[posicionId].quantity
    // if  (item.stock>=cantidadEncontrada){
    //    console.log('hay mucho stock del producto')       
    //    console.log(`este es mi stock actualmente`,item.stock)    
    // } else {console.log('no hay stock')}// aca deberia deshabilitar el boton terminar compra, sumar etc.

    // }
    //totalQ()
//--------------------------------------------------------------------------------------------------------------------------------------------------
    const onAdd =(cant)=>{            
        addToCart({cartItem:item,quantity:cant})  
    }
        
    return (
        <>       
            <h1 className='text-danger m-3 title'>Conoce mas</h1> 
            <Container className="container d-flex justify-content-center align-item-center h-100">
                <Row className="justify-content-center">
                    <Card border="danger" className="m-5 shadow p-3 bg-white rounded" >
                        <Card.Header className="fw-bold">Descripción del producto</Card.Header>
                        <Card.Body>     
                            <Card.Text>{item.longDescription}</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="justify-content-center">
                    <Card border="danger" className="m-5 shadow p-3 bg-white rounded" key={item.id} style={{width:'20rem'}}>              
                        <Card.Header className="fw-bold">{item.title}</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={item.pictureUrl}/>
                            <Card.Text>{item.shortDescription}</Card.Text>                        
                            <Card.Text>Precio u$s: {item.price}</Card.Text>     
                            <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd}/>                
                        </Card.Body>                
                    </Card>
                </Row>
            </Container>         
        </>
    )
}

export default ItemDetail
