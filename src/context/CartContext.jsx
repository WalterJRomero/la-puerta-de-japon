import {useState,createContext, useContext} from 'react'

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider({children}){

    const [cartList,setCartList] = useState([])    

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
        
    }         

    function removeItem(id){

        let itemFind=[]
        itemFind = cartList.filter((cartItem) => cartItem.cartItem.id !== id)
        setCartList(itemFind)      
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            removeItem
        }}>
            {children}
        </cartContext.Provider>
    )
}