import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (    
    <div className="App">        
          <NavBar/>        
    </div>    
  );  
}
export default App;
