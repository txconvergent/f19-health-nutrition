import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Map from "./component/Map";
import Details from "./component/Details";
import Home from "./component/Home";

// stupid github :(
const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="map" component={Map} title="Map" />
      <Scene key="details" component={Details} title="Details" />
    </Scene>
  </Router>
);

export default Routes;
