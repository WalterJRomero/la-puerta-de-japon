import { getUnoFetch } from "../utils/mock";
import {useEffect, useState} from 'react'
import ItemDetail from "./ItemDetail";
import {Spinner,Button} from "react-bootstrap"

function ItemDetailContainer() {
    const [unItem, setUnItem] = useState({})
    const [loading,setLoading]=useState(true)  

    useEffect(() => {        
        getUnoFetch
        .then(response=>setUnItem(response))
        .catch(error =>console.log(error))
        .finally(()=>setLoading(false)) 
    }, [()=>setLoading(!loading)])

    return (
    <>
        {loading ?  
                <Button variant="primary" disabled>
                    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Cargando desafio clase 7...
                </Button>:             
                <ItemDetail item={unItem}/>           
        }       
    </>
    )
}

export default ItemDetailContainer
