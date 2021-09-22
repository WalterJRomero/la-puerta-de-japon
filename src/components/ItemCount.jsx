import { useState } from "react"
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

function ItemCount({stock, initial, onAdd}) {
    const [contador,setContador]= useState(initial)
    const [btnAdd,setBtnAdd] = useState(true)

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
        setBtnAdd(false)

    }

    return (
        <>
            <Card.Body>                 
                <Card.Text className="fw-bold">Cantidad:{contador}</Card.Text>
                <Card.Text className="text-secondary">Unidades disponibles: {stock}</Card.Text>
                <ButtonGroup aria-label="Basic example">
                    {btnAdd?
                        <>
                            <Button variant="secondary" onClick={remCount}>-</Button>
                            <Button variant="secondary" onClick={agregarCarrito}>Agregar al carrito</Button>
                            <Button variant="secondary" onClick={addCount}>+</Button>                       
                        </>
                        :    
                        <>
                            <Button variant="primary" href={`/`}>Seguir comprando</Button>        
                            <Button variant="success" href={`/cart`}>Terminar Compra</Button>
                        </>                   
                    }
                </ButtonGroup>
            </Card.Body>
        </>
    )
}

export default ItemCount
