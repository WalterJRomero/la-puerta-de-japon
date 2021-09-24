import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import TituloCategorias from "./components/TituloCategorias";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
import { createContext } from "react";


export const ContextApp=createContext('test')

function App() {

	const greeting = 'Bienvenidos a la Puerta de Japón'

    return (    
		<CartContextProvider>
			<Router>
				<div className="App"> 
					<NavBar/> 
					<Switch>
						<Route exact path="/">
							<ItemListContainer greeting={greeting}/>   	
						</Route>
						<Route exact path="/category/:idCategoria">
							<TituloCategorias/>
							<ItemListContainer/>
						</Route>
						<Route exact path="/item/:idItem" component ={ItemDetailContainer}/>				
						<Route exact path="/cart" component={Cart}/>			
					</Switch>       
				</div>    
			</Router>
		</CartContextProvider>		
    );  
}
export default App;
 