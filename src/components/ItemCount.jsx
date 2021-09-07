import { useState } from "react"
import Card from 'react-bootstrap/Card'
import { Container } from "react-bootstrap"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

function ItemCount({stock, initial, onAdd}) {
    const [contador,setContador]= useState(initial)

    function addCount() {
        if (contador<stock){
            setContador(contador+1)
        }        
    }
    
    function remCount(){    
        if (contador>1){
            setContador(contador-1)
        } 
    }

    const agregarCarrito=()=>{
        onAdd(contador)
    }

    return (
        <>
        <Container className="m-5">
            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>Noche en Ryokan</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgT5OosBDgZC3L2Pfqkj4DRTVlqwSlkPQmg&usqp=CAU" />
                    <Card.Title>Ryokan Tokyo</Card.Title>
                    <Card.Text>{contador}</Card.Text>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" onClick={remCount}>-</Button>
                        <Button variant="secondary" onClick={agregarCarrito}>Agregar al carrito</Button>
                        <Button variant="secondary" onClick={addCount}>+</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Container>
        </>
    )
}

export default ItemCount
