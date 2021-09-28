import {useState,createContext, useContext} from 'react'

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider({children}){

    const [cartList,setCartList] = useState([])    
    const [total,setTotal] = useState(0)
    const [quantity,setQuantity] = useState(0)    

    function addToCart({cartItem,quantity}){     
       
        let itemFindIndex = []        
        itemFindIndex = cartList.findIndex(itemToAdd=>cartItem.id === itemToAdd.cartItem.id); 
        if (itemFindIndex === -1){
            setCartList(cartList=>[...cartList,{cartItem,quantity}])            
        } else {
            let newCart=[...cartList];          
            newCart[itemFindIndex].quantity += quantity;
            setCartList(newCart)           
        }        
    }
    
    function clearCart(){   

        setCartList([])
        setTotal(0)
        setQuantity(0)        
    }         

    function removeItem(id){

        let itemFind=[]
        itemFind = cartList.filter((cartItem) => cartItem.cartItem.id !== id)
        setCartList(itemFind)       
    }

    
    function totalPrice(){

        let acum=0
        if (cartList.length>0){

            cartList.forEach(item=>{               
                acum = item.quantity*item.cartItem.price+acum
            })        
            setTotal(acum)
        }    
    }

    function totalQ(){
        
        let acum=0
        if (cartList.length>0){

            cartList.forEach(item=>{               
                acum = item.quantity+acum
            })        
            setQuantity(acum)
        }
    }

    function isInCart(id){

        let itemFindIndex = []        
        itemFindIndex = cartList.findIndex(itemToAdd=>id === itemToAdd.cartItem.id); 
        if (itemFindIndex === -1){
            return false                       
        } else 
            return true        
               
    }

    function setItemsCart(){


    }
    
    return (
        <cartContext.Provider value={{
            cartList,
            total,
            quantity,
            addToCart,
            clearCart,
            removeItem,
            totalPrice,
            totalQ,
            isInCart,
            setItemsCart
        }}>
            {children}
        </cartContext.Provider>
    )
}