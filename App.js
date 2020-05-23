import React from "react";
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StatIndicator from "./components/StatIndicator";
import { CONFIG } from "./assets/config";
import { t } from "./assets/i18n";
import GestureRecognizer from "react-native-swipe-gestures";

export default class App extends React.Component {
  state = {
    message: "",
    currAction: 0,
    actions: ["Parler", "Nourrir", "Jouer", "Santé"],
  };

  send = () => {
    const { message } = this.state;
    if (message != "") {
      this.setState({ message: "" });
    }
  };

  swipeLeft = () => {
    let { currAction } = this.state;
    currAction++;
    this.setState({ currAction: currAction % 4 });
    console.log("SWIPED LEFT");
  };

  swipeRight = () => {
    let { currAction } = this.state;
    currAction === 0 ? (currAction = 3) : currAction--;
    this.setState({ currAction: currAction % 4 });
    console.log("SWIPED RIGHT");
  };

  render() {
    return (
      <View style={styles.mainWindow}>
        <StatusBar visible={true} barStyle="default" />
        <View style={styles.statWrapper}>
          <StatIndicator type="heal" />
          <StatIndicator type="hunger" />
          <StatIndicator type="humor" />
        </View>

        <View style={styles.flexContainer}>
          <Image style={styles.image} source={require("./assets/robot.png")} />

          <TextInput
            style={styles.input}
            value={this.state.message}
            onChangeText={(message) => this.setState({ message })}
            returnKeyType="send"
            placeholder={t.INPUT_PLACEHOLDER}
            width="100%"
          />
          <GestureRecognizer
            style={styles.button}
            onSwipeLeft={this.swipeLeft}
            onSwipeRight={this.swipeRight}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", justifyContent: "space-between" }}
              onPress={this.send}
            >
              <Ionicons
                style={{ lineHeight: 40, paddingLeft: 10 }}
                name="ios-arrow-back"
                size={24}
                color="#FFF"
              />
              <Text style={styles.buttonText}>
                {this.state.actions[this.state.currAction]}
              </Text>
              <Ionicons
                style={{ lineHeight: 40, paddingRight: 10 }}
                name="ios-arrow-forward"
                size={24}
                color="#FFF"
              />
            </TouchableOpacity>
          </GestureRecognizer>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWindow: {},

  statWrapper: {
    position: "absolute",
    height: 80,
    width: "100%",
    flexDirection: "row",
  },

  flexContainer: {
    position: "absolute",
    width: "90%",
    alignSelf: "center",
    marginTop: 180,
    flex: 1,
    alignItems: "center",
  },

  input: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#666",
  },

  button: {
    width: "100%",
    height: 40,
    backgroundColor: CONFIG.COLOR.PRIMARY,
  },

  buttonText: {
    textAlign: "center",
    color: "#FFF",
    lineHeight: 32,
    fontWeight: "bold",
    fontSize: 16,
  },
});
