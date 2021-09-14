import React from "react"
import ItemCount from "./ItemCount"
import {useState, useEffect} from "react"
import {Spinner,Button} from "react-bootstrap"
import ItemList from "./ItemList"
import {getFetch} from "../utils/mock"

//-----------------------------------------------------------------------------------------------------------------------
function ItemListContainer({greeting}) {

    const [stock,setStock] = useState(5)    
    const [initial,setInitial] = useState(1)
    const [productos,setProductos] =useState([])
    const [loading,setLoading]=useState(true)  

//----------------------------------------------------------------
    useEffect(() => {     
        getFetch
        .then(respuesta =>{setProductos(respuesta)})    
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))    
    },[()=>setLoading(!loading)])
    
//------------------------------------------------------------------
    const onAdd =(cant)=>{
        console.log(cant)
    }

    return (
    <>
        <h1 className='text-danger'>{greeting}</h1> 
        {loading ?  
                <Button variant="danger" disabled>
                    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Por favor espere...
                </Button>:             
                <ItemList items={productos}/>           
        }           
        <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>            
    </>
    )
}

export default ItemListContainer
