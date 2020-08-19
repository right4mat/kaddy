import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
//css imports
import "./App.css";
//comp imports
import Header from './components/header/Header';
//page imports
import Home from './pages/home/Home'
import Map from './pages/map/Map'
import Favorites from './pages/favorites/Favorites'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/locations">
            <Map />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
