import React from "react"
import {useState, useEffect} from "react"
import {Spinner,Button} from "react-bootstrap"
import ItemList from "./ItemList"
import {getFetch} from "../utils/mock"
import {useParams} from "react-router-dom"
import { getFirestore } from "../services/getFirebase"

function ItemListContainer({greeting}) {
        
    const [products,setProducts] =useState([])
    const [loading,setLoading]=useState(true) 
    const {idCategoria}  = useParams()    
   
    useEffect(() => {    

        if(idCategoria){
            const dbQuery = getFirestore()
            dbQuery.collection('items').where('category','==',idCategoria).get()
            .then(resp=>{
                setProducts(resp.docs.map(products=>({id:products.id,...products.data()})))       
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
            
        }else{
            const dbQuery = getFirestore()
            dbQuery.collection('items').get()
            .then(resp=>{
                setProducts(resp.docs.map(products=>({id:products.id,...products.data()})))       
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }      
        
    },[idCategoria]) 

    return (
        <>
            <h1 className='text-danger m-3'>{greeting}</h1> 
            {loading ?  
                    <Button variant="danger" disabled>
                        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Por favor espere...
                    </Button>:             
                    <ItemList items={products}/>           
            }     
        </>
    )
}

export default ItemListContainer
