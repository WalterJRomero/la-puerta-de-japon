import { useState } from "react"
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom"

function ItemCount({stock,initial,onAdd}) {
    
    const [count,setCount]= useState(initial)
    const [btnAdd,setBtnAdd] = useState(true)
    const [stockItems,setStockItems] =useState(stock)

    function addCount() {
        if (count<stock){
            setCount(count+1)
        }        
    }
    
    function remCount(){    
        if (count>1){
            setCount(count-1)
        } 
    }

    const addItem=()=>{
        onAdd(count)
        setBtnAdd(false)
        setStockItems(stockItems-count)
    } 

    function stockItem(){
        if (stock>0){
            return true
        }else return false
    }

    return (
        <>
            <Card.Body>                 
                <Card.Text className="fw-bold">Cantidad: {count}</Card.Text>
                <Card.Text className="text-secondary">Unidades disponibles: {stockItems}</Card.Text>
                <ButtonGroup aria-label="Basic example">
                {stockItem()?
                    <>
                        {btnAdd?
                            <>
                                <Button variant="secondary" onClick={remCount}>-</Button>
                                <Button variant="secondary" onClick={addItem}>Agregar al carrito</Button>
                                <Button variant="secondary" onClick={addCount}>+</Button>                       
                            </>
                            :    
                            <>
                                <Button variant="primary" as={Link} to ={`/`}>Seguir comprando</Button>        
                                <Button variant="success" as={Link} to ={`/cart`}>Terminar Compra</Button>
                            </>                   
                        }
                    </>
                    :
                    <>
                       <Button variant="secondary" size="lg" disabled>Producto sin stock</Button>{' '}
                    </>
                }
                </ButtonGroup>
            </Card.Body>
        </>
    )
}

export default ItemCount
