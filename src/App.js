import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoriesTitle from "./components/CategoriesTitle";
import Cart from "./components/Cart";
import CartContextProvider from './context/CartContext'
import EndWindow from "./components/EndWindow";


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
						<Route exact path="/category/:idCategory">
							<CategoriesTitle/>
							<ItemListContainer/>
						</Route>
						<Route exact path="/item/:idItem" component ={ItemDetailContainer}/>				
						<Route exact path="/cart" component={Cart}/>	
						<Route component={EndWindow}/>		
					</Switch>       
				</div>    
			</Router>		
		</CartContextProvider>		
    );  
}
export default App;
 