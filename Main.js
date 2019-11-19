import React, { Component } from "react";
import { Text, View, StyleSheet, Switch, TouchableOpacity } from "react-native";

export default class Main extends Component {
  state = {
    Vegan: false,
    Vegatarian: false,
    Nut_Allergy: false,
    Lactose_Intolerant: false,
    Halal: false,
    Kosher: false
  };

  toggleSwitch1 = value => {
    this.setState({ Vegan: value });
  };

  toggleSwitch2 = value => {
    this.setState({ Vegetarian: value });
  };

  toggleSwitch3 = value => {
    this.setState({ Nut_Allergy: value });
  };

  toggleSwitch4 = value => {
    this.setState({ Lactose_Intolerant: value });
  };

  toggleSwitch5 = value => {
    this.setState({ Halal: value });
  };

  toggleSwitch6 = value => {
    this.setState({ Kosher: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Vegan</Text>
        <Switch onValueChange={this.toggleSwitch1} value={this.state.Vegan} />

        <Text>Vegetarian</Text>
        <Switch
          onValueChange={this.toggleSwitch2}
          value={this.state.Vegetarian}
        />

        <Text>Nut Allergy</Text>
        <Switch
          onValueChange={this.toggleSwitch3}
          value={this.state.Nut_Allergy}
        />

        <Text>Lactose Intolerant</Text>
        <Switch
          onValueChange={this.toggleSwitch4}
          value={this.state.Lactose_Intolerant}
        />

        <Text>Halal</Text>
        <Switch onValueChange={this.toggleSwitch5} value={this.state.Halal} />

        <Text>Kosher</Text>
        <Switch onValueChange={this.toggleSwitch6} value={this.state.Kosher} />

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate("Map")}
          >
            <Text style={styles.btnTxt}>Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  userBtn: {
    backgroundColor: "#CC5500",
    padding: 15
  },

  btnText: {
    fontSize: 48,
    textAlign: "center",
    margin: "auto"
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%"
  }
});
