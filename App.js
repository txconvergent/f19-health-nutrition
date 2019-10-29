import React, { Component } from "react";

import HomeScreen from "./component/Home";
import DetailsScreen from "./component/Details";
// import MapScreen from "./component/Map";
import MapScreen from "./component/Map copy";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Map: MapScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "blue"
      },
      headerTintColor: "white"
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
