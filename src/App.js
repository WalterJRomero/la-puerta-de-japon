import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
	const greeting = 'Bienvenidos a la Puerta de Japón'
    return (    
   		<div className="App">        
        	<NavBar/> 
			<ItemListContainer greeting={greeting}/>   	
			<ItemDetailContainer/>
    	</div>    
    );  
}
export default App;
