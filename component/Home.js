import React, { Component } from "react";
import { Text, View, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import theme from "../theme";

export default class Home extends Component {
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
      <React.Fragment>
        <Text style={styles.titleText}>Inner Peas</Text>
        <View style={styles.container}>
          <Text style={styles.label}>Vegan</Text>
          <Switch onValueChange={this.toggleSwitch1} value={this.state.Vegan} />

          <Text style={styles.label}>Vegetarian</Text>
          <Switch
            onValueChange={this.toggleSwitch2}
            value={this.state.Vegetarian}
          />

          <Text style={styles.label}>Nut Allergy</Text>
          <Switch
            onValueChange={this.toggleSwitch3}
            value={this.state.Nut_Allergy}
          />

          <Text style={styles.label}>Lactose Intolerant</Text>
          <Switch
            onValueChange={this.toggleSwitch4}
            value={this.state.Lactose_Intolerant}
          />

          <Text style={styles.label}>Halal</Text>
          <Switch onValueChange={this.toggleSwitch5} value={this.state.Halal} />

          <Text style={styles.label}>Kosher</Text>
          <Switch
            onValueChange={this.toggleSwitch6}
            value={this.state.Kosher}
          />

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => Actions.map()}
            >
              <Text style={styles.btnTxt}>Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: theme.COLORS.TEXT
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.COLORS.HOME
  },

  userBtn: {
    textAlign: "center",
    padding: 15,
    backgroundColor: theme.COLORS.MAP_BUTTON_BACKGROUND
  },

  btnTxt: {
    fontSize: 28,
    textAlign: "center",
    margin: "auto",
    color: theme.COLORS.MAP_BUTTON_TEXT
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%"
  },

  titleText: {
    fontSize: 64,
    textAlign: "center",
    margin: "auto",
    color: theme.COLORS.TEXT,
    fontWeight: "bold",
    fontStyle: "italic",
    backgroundColor: theme.COLORS.HOME
  }
});
