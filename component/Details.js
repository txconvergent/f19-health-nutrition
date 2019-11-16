import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const name = "hi";

export default class Details extends Component {
  render() {
    return (
      <View style={styles.detailStyle}>
        <View style={{ flex: 1, backgroundColor: "powderblue" }}>
          <Text>Name {name}</Text>
        </View>
        <View style={{ flex: 5, backgroundColor: "skyblue" }}>
          <Text>Menu</Text>
        </View>
        <View style={{ backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "orange",
//     alignItems: "center",
//     justifyContent: "center"
//   },

//   input: {
//     width: "90%",
//     backgroundColor: "white",
//     padding: 15,
//     marginBottom: 10
//   },

//   userBtn: {
//     backgroundColor: "yellow",
//     padding: 15,
//     width: "45%"
//   },

//   btnTxt: {
//     fontSize: 12,
//     textAlign: "center"
//   },

//   btnContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%"
//   }
// });

const styles = StyleSheet.create({
  detailStyle: {
    alignItems: "stretch",
    flex: 1,
    flexDirection: "column"
  }
});
