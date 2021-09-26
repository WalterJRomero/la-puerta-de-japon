import Button from 'react-bootstrap/Button'
import { IoCartOutline } from "react-icons/io5";

function CartWidget() {
    
    return (
        <>
            <Button variant="success" >
                <IoCartOutline className='h4'/>
            </Button>                  
        </>
    )
}

export default CartWidget
