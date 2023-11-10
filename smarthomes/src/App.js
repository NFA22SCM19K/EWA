import {React, useState} from 'react';
import Home from './Home';
import Footer from './Footer';
import DoorBellsList from './DoorBellsList';
import DoorLocksList from './DoorLocksList';
import SpeakersList from './SpeakersList';
import LightingsList from './LightingsList';
import ThermostatsList from './ThermostatsList';
import Login from './Login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccessoryList from './AccessoryList';
import Registration from './Registration';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  
  const handleProduct = (product)=>{

    console.log("add to cart");
    setCartItems(
      [...cartItems,{...product, quantity:1}]
    )

    console.log(cartItems);
  };


  return (
    <Router>
    <div className="App">
      <div className='content'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/DoorBellsList">
          <DoorBellsList addItem={handleProduct} />
        </Route>
        <Route path="/DoorLocksList">
          <DoorLocksList />
        </Route>
        <Route path="/SpeakersList">
          <SpeakersList />
        </Route>
        <Route path="/LightingsList">
          <LightingsList />
        </Route>
        <Route path="/ThermostatsList">
          <ThermostatsList />
        </Route>
        <Route path="/AccessoryList">
          <AccessoryList />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route path="/Registration">
          <Registration />
        </Route>
        <Route exact path="/Cart">
          <Cart cartItems = {cartItems}/>
        </Route>
      </Switch>
      <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;
