import {getFetch} from "../utils/mock";
import {useEffect, useState} from 'react'
import ItemDetail from "./ItemDetail";
import {Spinner,Button} from "react-bootstrap"
import { useParams } from "react-router";
import { getFirestore } from "../services/getFirebase";

function ItemDetailContainer() {
    
    const [unItem, setUnItem] = useState();     
    const {idItem} = useParams(); 
    const [loading,setLoading]=useState(true)         
        
    useEffect(() => {           

        const dbQuery = getFirestore()        
        dbQuery.collection('items').doc(idItem).get()
        .then(resp=>setUnItem({id:resp.id,...resp.data()}))
        .catch(err=>console.log(err))
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
