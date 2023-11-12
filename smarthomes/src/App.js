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

  const paymentDetails = {
    1:  [{userName: "user1", orderName: "Echo Dot (5th Gen, 2022 release) with clock", orderPrice: 59.99, firstName:"test", creditCardNo: 7456},
         {userName: "user1", orderName: "Google - Nest Learning Smart Wifi Thermostat", orderPrice: 249.99, firstName:"test", creditCardNo: 7456},
        ],
    2:  [{ userName: "test2", orderName: "Echo Dot (5th Gen, 2022 release) with clock", orderPrice: 59.99, firstName:"test2", creditCardNo: 1235},
        ],
  }

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
        <Route exact path="/Login">
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
          <ViewOrder paymentDetails = {paymentDetails} />
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
