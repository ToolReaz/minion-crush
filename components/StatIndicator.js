import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { CONFIG } from "../assets/config";
import { t } from "../assets/i18n";
import { DarkerColor } from "../lib/darkerColor";

export default class StatIndicator extends Component {
  render() {
    let inner = null;
    switch (this.props.type) {
      case "heal":
        inner = (
          <View style={styles.stat}>
            <Text style={styles.title}>
              <AntDesign name="heart" size={18} color="#FFF" /> {t.HEALTH}
            </Text>
            <Text style={styles.num}>{this.props.number}%</Text>
          </View>
        );
        break;

      case "hunger":
        inner = (
          <View
            style={[
              styles.stat,
              {
                backgroundColor: CONFIG.COLOR.PRIMARY,
                borderColor: DarkerColor(CONFIG.COLOR.PRIMARY, -20),
                borderRightWidth: 3,
                borderLeftWidth: 3,
              },
            ]}
          >
            <Text style={styles.title}>
              <MaterialCommunityIcons
                name="food-apple"
                size={20}
                color="#FFF"
              />{" "}
              {t.HUNGER}
            </Text>
            <Text style={styles.num}>{this.props.number}%</Text>
          </View>
        );
        break;

      case "humor":
        inner = (
          <View style={styles.stat}>
            <Text style={styles.title}>
              <Entypo name="emoji-happy" size={18} color="#FFF" /> {t.HUMOR}
            </Text>
            <Text style={styles.num}>{this.props.number}%</Text>
          </View>
        );
        break;

      default:
        inner = <Text>Error</Text>;
        break;
    }

    // return <View style={styles.wrapper}>{inner}</View>;
    return inner;
  }
}

const styles = StyleSheet.create({
  stat: {
    backgroundColor: CONFIG.COLOR.PRIMARY,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  num: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  },
});
