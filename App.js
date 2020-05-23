import React from "react";
import { StyleSheet, View, Image, StatusBar } from "react-native";

import Dialog from "./components/Dialog";
import Feed from "./components/actions/Feed";
import Play from "./components/actions/Play";
import Heal from "./components/actions/Heal";
import StatIndicator from "./components/StatIndicator";

export default function App() {
  return (
    <View style={styles.mainWindow}>
      <StatusBar visible={true} barStyle="default" />
      <View style={styles.statWrapper}>
        <StatIndicator type="heal" />
        <StatIndicator type="hunger" />
        <StatIndicator type="humor" />
      </View>

      <View sytle={styles.flexContainer}>
        <View style={styles.icon}>
          <Image source={require("./assets/robot.png")} />
        </View>

        <View style={styles.dialog}>
          <Dialog />
        </View>

        <View style={styles.actions}>
          <Heal />
          <Feed />
          <Play />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWindow: {
    flex: 1,
  },

  statWrapper: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    marginBottom: 50,
  },

  flexContainer: {
    flex: 1,
    width: "100%",
    height: 100,
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#FF0000",
  },

  icon: {
    flex: 3,
    borderWidth: 4,
    borderColor: "#FF0000",
  },

  dialog: {
    flex: 1,
  },

  actions: {
    flex: 1,
  },
});
