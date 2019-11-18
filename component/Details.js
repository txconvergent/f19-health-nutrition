import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

// Galio components
import { Card, Block, NavBar, Icon } from "galio-framework";
import theme from "../theme";

const { width } = Dimensions.get("screen");

const cards = [
  {
    id: 1,
    title: "Taco bell",
    caption: "no vegan :("
  },
  {
    id: 2,
    title: "Pizza Press",
    caption: "yes vegan :)"
  }
];

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
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title={this.props.text}
          left={
            <TouchableOpacity onPress={() => console.log("wow it works!")}>
              <Icon
                name="meh"
                family="AntDesign"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          }
          style={
            Platform.OS === "android" ? { marginTop: theme.SIZES.BASE } : null
          }
          style={{ backgroundColor: theme.COLORS.WHITE }}
        />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {cards &&
              cards.map((card, id) => (
                <Card
                  key={`card-${id}`}
                  flex
                  shadow={false}
                  style={styles.card}
                  title={card.title}
                  caption={card.caption}
                  // imageBlockStyle={[styles.noRadius]}
                ></Card>
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
    elevation: theme.SIZES.BASE / 2
  }
});
