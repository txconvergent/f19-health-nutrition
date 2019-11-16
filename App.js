import React, { Component } from "react";
import Routes from "./Route";

// // import { createAppContainer } from "react-navigation";
// // import { createStackNavigator } from "react-navigation-stack";

// // // const RootStack = createStackNavigator(
// // //   {
// // //     Home: HomeScreen,
// // //     Details: DetailsScreen,
// // //     Map: MapScreen
// // //   },
// // //   {
// // //     initialRouteName: "Home",
// // //     defaultNavigationOptions: {
// // //       headerStyle: {
// // //         backgroundColor: "blue"
// // //       },
// // //       headerTintColor: "white"
// // //     }
// // //   }
// // // );

// const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    console.log("hello this is the start");
    return <Routes />;
  }
}
