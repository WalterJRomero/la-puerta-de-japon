import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
	const greeting = 'Bienvenidos a la Puerta de Japón'
	
    return (    
   		<div className="App">        
        	<NavBar/> 
			<ItemListContainer greeting={greeting}/>   		       
    	</div>    
    );  
}
export default App;
