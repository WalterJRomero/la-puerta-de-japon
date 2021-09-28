import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { IoCartOutline } from "react-icons/io5";
import {useCartContext} from "../context/CartContext"

function CartWidget() {

    const {quantity,totalQ}= useCartContext()
    
    totalQ();
    
    return (
        <>  
            <Button variant="secondary">
                    <IoCartOutline className='h4'/>
                <Badge bg="primary">
                    {quantity}
                </Badge>
                <span className="visually-hidden"></span>
            </Button>                         
        </>
    )
}

export default CartWidget
