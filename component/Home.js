import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
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
        <View style={styles.container}>
          <Text style={styles.titleText}>Inner Peas</Text>
          <Image
            style={{ marginBottom: 20 }}
            source={require("../assets/peas.png")}
          />

          <Text style={styles.label}>Vegan</Text>
          <Switch
            style={styles.switchButton}
            onValueChange={this.toggleSwitch1}
            value={this.state.Vegan}
          />

          <Text style={styles.label}>Vegetarian</Text>
          <Switch
            style={styles.switchButton}
            onValueChange={this.toggleSwitch2}
            value={this.state.Vegetarian}
          />

          <Text style={styles.label}>Nut Allergy</Text>
          <Switch
            style={styles.switchButton}
            onValueChange={this.toggleSwitch3}
            value={this.state.Nut_Allergy}
          />

          <Text style={styles.label}>Lactose Intolerant</Text>
          <Switch
            style={styles.switchButton}
            onValueChange={this.toggleSwitch4}
            value={this.state.Lactose_Intolerant}
          />

          <Text style={styles.label}>Halal</Text>
          <Switch
            style={styles.switchButton}
            onValueChange={this.toggleSwitch5}
            value={this.state.Halal}
          />

          <Text style={styles.label}>Kosher</Text>
          <Switch
            style={styles.switchButton}
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
  container: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: theme.COLORS.WHITE,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },

  titleText: {
    marginBottom: 20,
    fontSize: 64,
    color: theme.COLORS.TITLE_TEXT,
    fontWeight: "bold",
    fontStyle: "italic"
  },

  label: {
    color: theme.COLORS.TEXT
  },

  switchButton: {
    marginBottom: 10
  },

  userBtn: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: theme.COLORS.LIGHT_GREEN
  },

  btnTxt: {
    fontSize: 24,
    margin: "auto",
    color: theme.COLORS.DARK_GREEN
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    marginTop: 5
  }
});
