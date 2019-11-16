import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Details extends Component {
  static navigationOptions = {
    title: "Details"
  };
  render() {
    return (     
<View style={{flex: 1, justifyContent : 'center', backgroundColor : 'white'}}>
  <Text style={{marginTop: 10, alignSelf: 'center', fontSize: 32}}>Restaurant Name</Text>
  <View style={{flex: 1, height: 30, backgroundColor: 'orange'}} >
    <Text>{"\n\n\n\n\n"}</Text>
    <Text style ={{color: 'white', fontSize: 21, alignSelf: 'center'}}>Insert Nutrition Facts Here</Text>
  </View>
</View>
    );
  }
}
