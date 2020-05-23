import React from "react";
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text,
  Keyboard,
} from "react-native";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import StatIndicator from "./components/StatIndicator";
import { CONFIG } from "./assets/config";
import { t } from "./assets/i18n";
import GestureRecognizer from "react-native-swipe-gestures";
import { SENTENCES } from "./assets/sentences";

export default class App extends React.Component {
  ACTIONS = ["SPEAK", "FOOD", "HUMOUR", "HEALTH"];

  state = {
    message: "",
    response: "",
    currAction: 0,
    actions: ["Parler", "Nourrir", "Jouer", "Santé"],
    FOOD: 100,
    HUMOUR: 100,
    HEALTH: 100,
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
  };

  swipeRight = () => {
    let { currAction } = this.state;
    currAction === 0 ? (currAction = 3) : currAction--;
    this.setState({ currAction: currAction % 4 });
  };

  getResponse = (res) => {
    if (typeof res === "string") {
      return res;
    } else if (Array.isArray(res)) {
      return res[Math.floor(Math.random() * res.length)];
    } else {
      const keys = Object.keys(res);
      const percents = keys.map((x) => parseInt(x)).sort((a, b) => a - b);
      const proba = Math.floor(Math.random() * 100);
      let start = 0;
      let end = 0;
      for (let i in percents) {
        end = end + percents[i];
        if (proba >= start && proba < end) {
          return res[percents[i]];
        }
        start = end;
      }
    }
  };

  updateStats = (stat, coef) => {
    const { state } = this;
    if (coef % 1 === 0) {
      state[stat] += coef;
    } else {
      state[stat] *= coef;
    }
    this.setState(state);
  };

  sendMsg = async () => {
    const { message, currAction } = this.state;
    const action = this.ACTIONS[currAction];
    const answeres = SENTENCES[action];
    const lowerMessage = message.toLocaleLowerCase().trim();
    let response = null;

    // Hide keyboard & remove text
    Keyboard.dismiss();
    this.setState({ message: "" });

    // Check exact match
    for (let item of answeres.MATCH) {
      if (item.input.toLocaleLowerCase().trim() === lowerMessage) {
        response = this.getResponse(item.response);
        if ("coef" in item) this.updateStats(action, item.coef);
        break;
      }
    }

    // If no exact match found, look for partial
    if (!response) {
      for (let item of answeres.CONTAIN) {
        if (item.input.toLocaleLowerCase().trim() === lowerMessage) {
          response = this.getResponse(item.response);
          if ("coef" in item) this.updateStats(action, item.coef);
          break;
        }
      }
    }

    // If still no response, use a default one
    if (!response) {
      response =
        SENTENCES.DEFAULTS[
          Math.floor(Math.random() * SENTENCES.DEFAULTS.length)
        ];
    }

    await Speech.stop();
    Speech.speak(response);
    this.setState({ response });
  };

  render() {
    return (
      <View style={styles.mainWindow}>
        <StatusBar visible={true} barStyle="default" />
        <View style={styles.statWrapper}>
          <StatIndicator type="heal" number={this.state.HEALTH} />
          <StatIndicator type="hunger" number={this.state.FOOD} />
          <StatIndicator type="humor" number={this.state.HUMOUR} />
        </View>

        <View style={styles.flexContainer}>
          {this.state.response != "" && (
            <Text style={styles.response}>{this.state.response}</Text>
          )}
          {this.state.response != "" && (
            <Ionicons
              style={styles.arrow}
              name="ios-arrow-down"
              size={32}
              color={CONFIG.COLOR.PRIMARY}
            />
          )}

          <Image style={styles.image} source={require("./assets/robot.png")} />

          <TextInput
            style={styles.input}
            value={this.state.message}
            onChangeText={(message) => this.setState({ message })}
            onSubmitEditing={this.sendMsg}
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
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={this.sendMsg}
            >
              <Ionicons
                onPress={this.swipeRight}
                style={{ lineHeight: 40, paddingLeft: 10 }}
                name="ios-arrow-back"
                size={24}
                color="#FFF"
              />
              <Text style={styles.buttonText}>
                {this.state.actions[this.state.currAction]}
              </Text>
              <Ionicons
                onPress={this.swipeLeft}
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
    marginTop: 120,
    flex: 1,
    alignItems: "center",
  },

  response: {
    borderWidth: 3,
    borderColor: CONFIG.COLOR.PRIMARY,
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
  },

  arrow: {
    marginBottom: 30,
    marginTop: -12,
    paddingTop: 0,
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
