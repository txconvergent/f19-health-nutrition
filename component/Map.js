import React, { Component } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import YelpService from "../services/yelp";

import get from "lodash/get";
import pick from "lodash/pick";

// constant that saves the markers? (not sure)
const Marker = MapView.Marker;

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

// location of UT Tower
const initialRegion = {
  latitude: 30.28565,
  longitude: -97.73921
};

export default class MapScreen extends Component {
  state = {
    location: null,
    errorMessage: null,
    restaurants: []
  };

  componentWillMount() {
    this.getLocationAsync();
  }

  // get the user location
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    this.getRestaurants();
  };

  // call getRestaurants method from yelp.js and save the array to this state? (not sure)
  getRestaurants = async () => {
    const coords = get(this.state.location, "coords");
    const userLocation = pick(coords, ["latitude", "longitude"]);
    let restaurants = await YelpService.getRestaurants(userLocation);
    this.setState({ restaurants });
  };

  // renders markers on the map
  renderMarkers() {
    return this.state.restaurants.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ));
  }

  // display the screen
  render() {
    // const { location } = this.props; // is this necessary? and how's different?
    const { location } = this.state;
    const region = {
      // ???
      // latitude: get(location, "coords.latitude", null),
      // longitude: get(location, "coords.longitude", null),
      latitude: get(location, "coords.latitude"),
      longitude: get(location, "coords.longitude"),
      ...deltas
    };

    // if (!region.latitude || !region.longitude) {
    //   return (
    //     <View>
    //       <Text>Loading map...</Text>
    //     </View>
    //   );
    // }

    return (
      <MapView
        style={styles.mapStyle}
        region={region}
        initialRegion={{ ...initialRegion, ...deltas }}
        showsUserLocation
      >
        {this.renderMarkers()}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
