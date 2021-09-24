// import {useState,createContext,useContext} from 'react'

// const cartContext = createContext([])

// export const useCartContext = ()=>useContext(cartContext)

// function CartContextProvider({children}) {

//     const [cartList, setCartList] = useState([])

//     function addToCart(item){
//         setCartList([...cartList,item])
//     }

//     function clearCart() {
//         setCartList([])        
//     }

//     console.log(cartList)

//     return (
//         <cartContext.Provider value={{
//             cartList,
//             addToCart,
//             clearCart
//         }}>
//             {children}            
//         </cartContext.Provider>
//     )
// }

// export default CartContextProvider

import {useState, createContext, useContext} from 'react'

const cartContext= createContext([])

export const useCartContext = () => useContext(cartContext) 


export default function CartContextProvider ({children}) {
    const [carList, setCarList] = useState([])

    function addToCart(item) {
        setCarList([...carList, item])
    }

    function borrarLista() {
        carList([])
    }

    console.log(carList)
    return(
        <cartContext.Provider value={{
            carList,
            addToCart,
            borrarLista
        }}>
            {children}
        </cartContext.Provider>
    )
}

