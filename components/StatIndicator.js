import React, { Component } from "react";
import { View, Text } from "react-native";

export default class StatIndicator extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: "row", alignContent: "space-around" }}
      >
        <Text>{this.props.name || "test"}</Text>
      </View>
    );
  }
}
