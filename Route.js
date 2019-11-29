import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Map from "./component/Map";
import Details from "./component/Details";
import Home from "./component/Home";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="map" component={Map} title="Map" initial={false} />
      <Scene
        key="details"
        component={Details}
        title="Details"
        initial={false}
      />
    </Scene>
  </Router>
);

export default Routes;
