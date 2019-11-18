import React, { Component, Text } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import get from "lodash/get";
import { Actions } from "react-native-router-flux";

const Marker = MapView.Marker;

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class Map extends Component {
  state = {
    myLocation: 0,
    places: []
  };

  componentWillMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    // if (status !== "granted") {
    //   this.setState({
    //     errorMessage: "Permission to access location was denied"
    //   });
    // }

    let mylocation = await Location.getCurrentPositionAsync({});
    this.setState({ mylocation });
    console.log("hello this is my location");
    console.log(this.state.mylocation);
  };

  // call getRestaurants method from yelp.js and save the array to places
  // getRestaurants = async () => {
  //   const coords = get(this.state.location, "coords");
  //   const userLocation = pick(coords, ["latitude", "longitude"]);
  //   let places = await YelpService.getRestaurants(userLocation);
  //   console.log("test");
  //   this.setState({ places });
  //   console.log(this.state.places);
  // };

  renderMarkers() {
    // console.log("this is marker");
    // console.log(this.state.places);
    // return this.state.places.map((place, i) => (
    //   <Marker key={i} title="Test" coordinate={{ lat: -34, lng: 151 }} />
    // ));
    return (
      <Marker
        key={0}
        title="Test"
        coordinate={{ latitude: 30.28565, longitude: -97.73921 }}
        // onPress={e => Actions.details()}
        onCalloutPress={e =>
          Actions.details({ text: "This is what is passed yesss" })
        }
      />
    );
  }

  render() {
    const { mylocation } = this.state;
    const region = {
      latitude: get(mylocation, "coords.latitude"),
      longitude: get(mylocation, "coords.longitude"),
      ...deltas
    };

    return (
      <MapView style={styles.mapStyle} region={region} s showsUserLocation>
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
