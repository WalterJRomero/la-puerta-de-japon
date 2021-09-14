import { useState } from "react"
import Card from 'react-bootstrap/Card'
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
        <Card.Body>                 
            <Card.Text>{contador}</Card.Text>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={remCount}>-</Button>
                <Button variant="secondary" onClick={agregarCarrito}>Agregar al carrito</Button>
                <Button variant="secondary" onClick={addCount}>+</Button>
            </ButtonGroup>
        </Card.Body>
    </>
    )
}

export default ItemCount
