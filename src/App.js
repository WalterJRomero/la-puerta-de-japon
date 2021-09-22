import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import TituloCategorias from "./components/TituloCategorias";
import {createContext, useContext} from 'react'
import Cart from "./components/Cart"

function App() {
	const greeting = 'Bienvenidos a la Puerta de Japón'
    return (    
		<BrowserRouter>
			<div className="App"> 
				<NavBar/> 
				<Switch>
					<Route exact path="/">
						<ItemListContainer greeting={greeting}/>   	
					</Route>
					<Route exact path="/category/:idCategoria" >
						<TituloCategorias/>
						<ItemListContainer/>
					</Route>
					<Route exact path="/item/:idItem" >
						<ItemDetailContainer/>
					</Route>
					<Route exact path="/cart">
						<Cart/>
					</Route>
				</Switch>       
			</div>    
		</BrowserRouter>
    );  
}
export default App;
