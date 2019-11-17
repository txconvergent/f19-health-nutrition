import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Map from "./component/Map";
import Details from "./component/Details";

// stupid github :(
const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="map" component={Map} title="Map" initial={true} />
      <Scene key="details" component={Details} title="Details" />
    </Scene>
  </Router>
);

export default Routes;
