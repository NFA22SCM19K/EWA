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
import Details from './Details';
import HomeSM from './HomeSM';
import HomeSAM from './HomeSAM';
import ViewOrder from './ViewOrder';
import AddProductPage from './AddProductPage';
import ProductUpdatePage from './ProductUpdatePage';
import ProductDeletePage from './ProductDeletePage';
import Logout from './Logout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [detailsItem, setDetailsItems] = useState([]);

  const handleDetails = (item)=>{
    setDetailsItems(item)
  }
  
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
        <Route exact path="/homesm">
          <HomeSM />
        </Route>
        <Route exact path="/homesam">
          <HomeSAM />
        </Route>
        <Route path="/DoorBellsList">
          <DoorBellsList addItem={handleProduct}  details={handleDetails}/>
        </Route>
        <Route path="/DoorLocksList">
          <DoorLocksList addItem={handleProduct}  details={handleDetails}/>
        </Route>
        <Route path="/SpeakersList">
          <SpeakersList addItem={handleProduct}  details={handleDetails}/>
        </Route>
        <Route path="/LightingsList">
          <LightingsList addItem={handleProduct}  details={handleDetails}/>
        </Route>
        <Route path="/ThermostatsList">
          <ThermostatsList addItem={handleProduct}  details={handleDetails}/>
        </Route>
        <Route path="/AccessoryList">
          <AccessoryList addItem={handleProduct}  details={handleDetails}/>
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route exact path="/Logout">
          <Logout />
        </Route>
        <Route path="/Registration">
          <Registration />
        </Route>
        <Route exact path="/Cart">
          <Cart cartItems = {cartItems}/>
        </Route>
        <Route exact path="/Details">
          <Details item = {detailsItem}/>
        </Route>
        <Route exact path="/ViewOrder">
          <ViewOrder />
        </Route>
        <Route exact path="/AddProductPage">
          <AddProductPage />
        </Route>
        <Route exact path="/ProductUpdatePage">
          <ProductUpdatePage />
        </Route>
        <Route exact path="/ProductDeletePage">
          <ProductDeletePage/>
        </Route>
      </Switch>
      <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;
