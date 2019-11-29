import React, { Component } from "react";
import Routes from "./Route";
import * as firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgPTlv7q0nLT8JKqcLyn_sve8RRkPvceA",
  projectId: "nutrition-b17ba"
};
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
global.db = db;

export default class App extends Component {
  render() {
    console.log("Starting the app");
    return <Routes />;
  }
}
