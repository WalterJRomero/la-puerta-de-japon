import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {useState} from 'react'
import { useCartContext } from "../context/CartContext"
import {Link} from "react-router-dom"


function EndWindow({generateOrder}) {
    const {clearCart,idOrder}= useCartContext() 
    const [show, setShow] = useState(false);
    const [idOld,setIdOld]=useState('')
    const [loading,setLoading]  = useState(false)
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const finishBuy=()=>{  
        setIdOld(idOrder)
        if (idOld!==idOrder && idOrder.lenght>0)
        generateOrder()
        setTimeout(()=>handleShow(),2000)  
        setLoading(true)
    }
  
    const closeBuy=() =>{
        handleClose()
        clearCart()        
    }

    return (
        <>  
            <Button variant="success" onClick={finishBuy} style={{width:"90%",height:'5vh'}} className='m-2' type="submit">
                Finalizar Compra!
            </Button>
            {loading? 
                <>                          
                    {(idOld!==idOrder)?
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Gracias por tu Compra!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Este es tu numero de orden {idOrder}, te lo enviaremos al email registrado anteriormente.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={closeBuy} as={Link} to ={`/`}>
                                    Cerrar
                                </Button>          
                            </Modal.Footer>
                        </Modal>
                        :                        
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Ups!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Parece que te olvidaste completar algunos datos, por favor completalos para finalizar la compra</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>          
                            </Modal.Footer>
                        </Modal>                        
                    }
                </>
                :
                <>
                </>        
            }
        </>
    )
}

export default EndWindow
    