import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { IoCartOutline } from "react-icons/io5";
import {useCartContext} from "../context/CartContext"

function CartWidget() {

    const {totalQ}= useCartContext()

    return (
        <>  
            <Button variant="secondary">
                    <IoCartOutline className='h4'/>
                <Badge bg="light" style={{border:"black solid 1px", color:"black"}}>                   
                    {totalQ()}
                </Badge>
                <span className="visually-hidden"></span>
            </Button>                         
        </>
    )
}

export default CartWidget
