import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Card, Block } from "galio-framework";
import theme from "../theme";
import menu from "../static/menu";

const { width } = Dimensions.get("screen");
let count = 0;
let dis = null;

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
    const { navigation } = this.props;
    console.log(navigation);
    console.log(this.props);
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {dis &&
              dis.map((item, id) => (
                <TouchableOpacity
                  key={id}
                  style={item.rec ? styles.rec : styles.card}
                  onPress={() => console.log(id)}
                >
                  <Card
                    flex
                    borderless
                    shadow={true}
                    title={item.title}
                    caption={item.caption}
                  ></Card>
                </TouchableOpacity>
              ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
    borderRadius: 10
  },
  rec: {
    backgroundColor: theme.COLORS.LIGHT_GREEN,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
    borderRadius: 10
  }
});
