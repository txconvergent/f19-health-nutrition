import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

export default class Details extends Component {
  state = {
    name: "foo",
    foodList: []
  };

  getFoods = async () => {
    let temp = [];
    let snapshot = await global.db.collection("Food_Items").get();

    snapshot.forEach(doc => {
      temp.push(doc.data());
    });

    this.setState({
      foodList: temp
    });
  };

  componentWillMount() {
    this.getFoods();
  }

  render() {
    return (
      <View style={styles.detailStyle}>
        <Text style={styles.name}>Restaurant {this.state.name}</Text>
        <View style={styles.box}>
          <Text style={styles.nutrition}>Insert Nutrition Facts Here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailStyle: {
    alignItems: "stretch",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white"
  },
  name: { marginTop: 10, alignSelf: "center", fontSize: 32 },
  nutrition: { color: "white", fontSize: 21, alignSelf: "center" },
  box: { flex: 1, height: 30, backgroundColor: "orange" }
});
