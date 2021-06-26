import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navigation/Navbar';
import Home from './view/Home'
import Products from './view/Products';
import ProductDetails from './view/ProductDetails';
import Login from './view/Login';
import CheckOut from './view/CheckOut';
import UserOrderHistory from './view/UserOrderHistory';
import Orders from './view/Orders';
import Users from './view/Users';
import OrderConfirm from './view/OrderConfirm';




function App() {


  return (
    <Router className="App">
       <Navbar />

       <div className="container">
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/products" component={Products}/>
           <Route exact path="/products/:id" component={ProductDetails}/>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/checkout" component={CheckOut}/>
           <Route exact path="/checkout/orderconfirm" component={OrderConfirm} />
           <Route exact path="/order/:email" component={UserOrderHistory}/>

           <Route exact path="/orders" component={Orders}/>
           <Route exact path="/users" component={Users} />
           
         </Switch>
       </div>
    </Router>
  );
}

export default App;
