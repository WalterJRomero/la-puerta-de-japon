import React from "react"
import {useState, useEffect} from "react"
import {Spinner,Button} from "react-bootstrap"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"
import { getFirestore } from "../services/getFirebase"
import '../styles/ItemListContainer.css'

function ItemListContainer({greeting}) {
        
    const [products,setProducts] =useState([])
    const [loading,setLoading]=useState(true) 
    const {idCategory}  = useParams()    
   
    useEffect(() => {    

        if(idCategory){
            const dbQuery = getFirestore()
            dbQuery.collection('items').where('category','==',idCategory).get()
            .then(resp=>{
                setProducts(resp.docs.map(items=>({id:items.id,...items.data()})))       
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
            
        }else{
            const dbQuery = getFirestore()
            dbQuery.collection('items').get()
            .then(resp=>{
                setProducts(resp.docs.map(items=>({id:items.id,...items.data()})))       
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }      
        
    },[idCategory]) 

    return (
        <>
            <h1 className='text-danger m-3 title'>{greeting}</h1> 
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
