import React, { Component } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import YelpService from "../services/yelp";
import get from "lodash/get";
import pick from "lodash/pick";

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
    places: []
  };

  componentWillMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    // ask for permission
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    // get user location
    let location = await Location.getCurrentPositionAsync({});
    console.log('hello again');
    this.setState({ location });
    console.log(this.state.location);
    
  };

  // call getRestaurants method from yelp.js and save the array to places
  getRestaurants = async () => {
    const coords = get(this.state.location, "coords");
    const userLocation = pick(coords, ["latitude", "longitude"]);
    let places = await YelpService.getRestaurants(userLocation);
    console.log("response");
    this.setState({ places });
    console.log(this.state.places);
  };

  // renders markers on the map
  renderMarkers() {
    return this.state.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ));
  }

  // display the screen
  render() {
    const { location } = this.state;
    const region = {
      latitude: get(location, "coords.latitude"),
      longitude: get(location, "coords.longitude"),
      ...deltas
    };
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
