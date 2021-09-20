import React from "react"
import {useState, useEffect} from "react"
import {Spinner,Button} from "react-bootstrap"
import ItemList from "./ItemList"
import {getFetch} from "../utils/mock"
import {useParams} from "react-router-dom"

function ItemListContainer({greeting}) {    
    const [productos,setProductos] =useState([])
    const [loading,setLoading]=useState(true) 
    const {idCategoria}  = useParams()    
   
    useEffect(() => {    
        getFetch
        .then((respuesta) =>{  

            if(idCategoria){
                const categoriaFiltrada=respuesta.filter(prod=>prod.category.toLowerCase()===idCategoria)
                setProductos(categoriaFiltrada)                
            }
            else {setProductos(respuesta)}
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[idCategoria]) 

    return (
        <>
            <h1 className='text-danger'>{greeting}</h1> 
            {loading ?  
                    <Button variant="danger" disabled>
                        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Por favor espere...
                    </Button>:             
                    <ItemList items={productos}/>           
            }     
        </>
    )
}

export default ItemListContainer
