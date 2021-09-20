import {getFetch} from "../utils/mock";
import {useEffect, useState} from 'react'
import ItemDetail from "./ItemDetail";
import {Spinner,Button} from "react-bootstrap"
import { useParams } from "react-router";

function ItemDetailContainer() {
    const [unItem, setUnItem] = useState();     
    const {idItem} = useParams(); 
    const [loading,setLoading]=useState(true) 
    
    useEffect(() => {           
        getFetch        
        .then((respuesta) =>{            
           
            if(idItem === undefined){         
                setUnItem(respuesta)
                
            }else{           
            const idFiltrado=respuesta.find(item=>item.id===parseInt(idItem))              
            setUnItem(idFiltrado)}
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[idItem])     

    return (
        <>
            {loading ?  
                    <Button variant="primary" disabled className="m-2 p-2">
                        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Cargando detalles
                    </Button>: 
                
                    unItem && <ItemDetail key={unItem.id} item={unItem}/>                 
            }           
        </>
    )
}

export default ItemDetailContainer
