import React  from 'react'
import {useCartContext} from "../context/CartContext"
import {Button, Card, Container,Nav} from "react-bootstrap"
import {Link} from 'react-router-dom'
import {cartEmptyImg} from '../utils/mock'
import {useState} from 'react'



function Cart() {
    
    const {cartList,total,clearCart,removeItem,totalPrice,totalQ}= useCartContext()
    const cartLength = cartList.length

    totalPrice();    
    totalQ();

    return (
        <>   
            <h1 className="mt-3" >Tu carrito de compras</h1>     
            {cartLength>0?            
                <Container fluid className='m-2 p-4'>
                    {cartList.map(item=>
                        <Card className='m-2 p-3'key={item.cartItem.id} style={{ display:'flex' ,flexDirection:'row', alignItems:'center'}}>
                            <Container style={{ display:'flex' ,flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                <Card.Img variant="top" src={item.cartItem.pictureUrl} style={{ height: '4rem',width:'5.2rem'}} />                            
                                <Card.Title style={{ paddingLeft:'1rem'}} >{item.cartItem.title}</Card.Title>                                
                                <Button onClick={()=>removeItem(item.cartItem.id)} variant="danger">Eliminar</Button>                                
                            </Container>
                            
                            <Container key={item.cartItem.id} style={{ display:'flex' ,flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
                                <Container style={{ display:'flex' ,flexDirection:'row',  justifyContent:'center', alignItems:'center'}}>
                                    <Card.Title className="m-1">Cantidad:</Card.Title>
                                    <Button variant="secondary" onClick={()=>console.log('restaria')} className="m-1">-</Button>
                                    <Card.Title className="m-1">{item.quantity}</Card.Title>
                                    <Button variant="secondary" onClick={()=>console.log('sumaria')} className="m-1">+</Button>
                                </Container>
                                <Container style={{ display:'flex' ,flexDirection:'row',  justifyContent:'end', alignItems:'center'}}>
                                    <Card.Title style={{fontSize:'1.5rem'}}  className="m-1">u$s</Card.Title>
                                    <Card.Title style={{fontSize:'1.5rem'}}  className="m-1"> {item.cartItem.price*item.quantity}</Card.Title>
                                </Container>
                            </Container> 
                        </Card>                    
                    )} 
                    <Card className='m-2 p-3' style={{ display:'flex' ,flexDirection:'row',alignItems:'center', justifyContent:'end'}}>                        
                        <Container style={{ display:'flex' ,flexDirection:'row',alignItems:'center', justifyContent:'end',marginRight:'0.5rem'}}>                                        
                            <Card.Title style={{ paddingLeft:'1rem'}} className="display-4 lead" size="sm">Precio Total: u$s {total} </Card.Title>                                
                        </Container>                        
                    </Card>
                    <Card className='m-2 p-3' style={{ display:'flex' ,flexDirection:'row',justifyContent:'end'}}>                       
                        <Button onClick={clearCart} className='btn-danger m-2'>Vacíar carrito</Button>
                        <Button onClick={()=>console.log('compra realizada')} className='m-2' variant="success" style={{fontSize:'1.5rem'}}>Terminar Compra</Button>
                    </Card>
                </Container>
                :        
                <Container fluid className="mt-5 p-5">
                    <Card style={{ height: '18rem' , justifyContent:'center', alignItems:'center'}}>     
                        <Card.Img variant="top" src={cartEmptyImg} style={{ height: '10rem',width:'10rem'}}/>           
                        <Card.Title className=" h2 display-4 text-muted lead">Aún no tenes productos en tu carrito</Card.Title>
                        <Nav.Link as={Link} to="/">Acá podes ver todos los productos que tenemos para vos</Nav.Link>
                    </Card>
                </Container>
            }          
        </>
    )
}

export default Cart
