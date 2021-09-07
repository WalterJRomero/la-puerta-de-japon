import React from "react"
import ItemCount from "./ItemCount"
import { useState } from "react"
import { Container } from "react-bootstrap"

function ItemListContainer({greeting}) {

    const [stock,setStock] = useState(5)    
    const [initial,setInitial] = useState(1)

    const onAdd =(cant)=>{
        console.log(cant)
    }
       
    return (
        <>
            <h1 className='text-danger'>{greeting}</h1>   
            <Container fluid>
                <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>            
            </Container>           
        </>
    )
}

export default ItemListContainer
