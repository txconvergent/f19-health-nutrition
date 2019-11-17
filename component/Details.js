import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card, Block, NavBar, Icon } from "galio-framework";
import theme from "../theme";

const { width } = Dimensions.get("screen");

const cards = [
  {
    id: 1,
    title: "Taco bell",
    caption: "no vegan :(",
    full: "hi"
  },
  {
    id: 2,
    title: "pizza press",
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
      <Block safe flex style={{ backgroundColor: "orange" }}>
        <NavBar
          title={this.state.name}
          left={
            <TouchableOpacity onPress={() => console.log("wow it works!")}>
              <Icon
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          }
          style={
            Platform.OS === "android" ? { marginTop: theme.SIZES.BASE } : null
          }
          style={{ backgroundColor: "powderblue" }}
        />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {cards &&
              cards.map((card, id) => (
                <Card
                  key={"card-hey"}
                  flex
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  // titleColor={card.full ? theme.COLORS.WHITE : null}
                  style={styles.card}
                  title={card.title}
                  caption={card.caption}
                  // location={card.location}
                  // avatar={`${card.avatar}?${id}`}
                  // image={card.image}
                  imageStyle={[card.padded ? styles.rounded : null]}
                  imageBlockStyle={[
                    // card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                    // card.full ? null :
                    styles.noRadius
                  ]}
                  // footerStyle={card.full ? styles.full : null}
                >
                  {/* {card.full ? (
                    <LinearGradient
                      colors={["transparent", "rgba(0,0,0, 0.8)"]}
                      style={styles.gradient}
                    />
                  ) : null} */}
                </Card>
              ))}
          </Block>
        </ScrollView>
        {/* <View style={styles.detailStyle}>
          <Text style={styles.name}>Restaurant {name}</Text>
          <View style={styles.box}>
            <Text style={styles.nutrition}>Insert Nutrition Facts Here</Text>
          </View>
        </View> */}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  // what was before

  // detailStyle: {
  //   alignItems: "stretch",
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   backgroundColor: "white"
  // },
  // name: { marginTop: 10, alignSelf: "center", fontSize: 32 },
  // nutrition: { color: "white", fontSize: 21, alignSelf: "center" },
  // box: { flex: 1, height: 30, backgroundColor: "orange" },

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
  },
  // full: {
  //   position: "absolute",
  //   bottom: 0,
  //   right: 0,
  //   left: 0
  // },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: "absolute",
    overflow: "hidden",
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5
  }
});
