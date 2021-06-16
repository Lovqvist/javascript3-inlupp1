import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <Router className="App">
       <Navbar />
    </Router>
  );
}

export default App;
