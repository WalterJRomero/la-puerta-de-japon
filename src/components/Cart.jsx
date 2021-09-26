import React, { useState } from 'react'
import {useCartContext} from "../context/CartContext"
import {Button, Card, Container,Nav} from "react-bootstrap"
import {Link} from 'react-router-dom'
import {cartEmptyImg} from '../utils/mock'
import { IoClose } from "react-icons/io5";


function Cart() {
    
    const {cartList,clearCart,removeItem}= useCartContext()

    const cartLength = cartList.length

    return (
        <>   
            <h1 className="mt-3" >Tu carrito de compras</h1>     
            {cartLength>0?            
                <Container fluid className='m-2 p-4'>
                    {cartList.map(item=>
                        <Card className='m-2 p-3'key={item.cartItem.id} style={{ display:'flex' ,flexDirection:'row',  justifyContent:'space-around', alignItems:'center'}}>
                            <Container style={{ display:'flex' ,flexDirection:'row',alignItems:'center'}}>
                                <Card.Img variant="top" src={item.cartItem.pictureUrl} style={{ height: '5rem',width:'5rem'}} />                            
                                <Card.Title style={{ paddingLeft:'1rem'}} >{item.cartItem.title}</Card.Title>                                
                            </Container>
                            
                            <Container key={item.cartItem.id} style={{ display:'flex' ,flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
                                <Card.Title>Cantidad: {item.quantity}</Card.Title>
                                <Card.Title>u$s {item.cartItem.price*item.quantity}</Card.Title>
                                <Button onClick={()=>removeItem(item.cartItem.id)} variant="danger">
                                    <IoClose />
                                </Button>                                
                            </Container> 
                        </Card>                            
                       
                    )}         
                    <Button onClick={clearCart} >Vacíar carrito de compra</Button>
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
