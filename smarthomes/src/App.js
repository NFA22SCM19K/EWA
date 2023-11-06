import Home from './Home';
import Footer from './Footer';
import DoorBellsList from './DoorBellsList';
import DoorLocksList from './DoorLocksList';
import SpeakersList from './SpeakersList';
import LightingsList from './LightingsList';
import ThermostatsList from './ThermostatsList';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
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
        <Route exact path="/DoorBellsList">
          <DoorBellsList />
        </Route>
        <Route exact path="/DoorLocksList">
          <DoorLocksList />
        </Route>
        <Route exact path="/SpeakersList">
          <SpeakersList />
        </Route>
        <Route exact path="/LightingsList">
          <LightingsList />
        </Route>
        <Route exact path="/ThermostatsList">
          <ThermostatsList />
        </Route>
      </Switch>
      <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;
