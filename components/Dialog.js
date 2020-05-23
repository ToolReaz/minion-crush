import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

export default class Dialog extends Component {
  state = {
    message: "",
  };

  send = () => {
    const { message } = this.state;
    if (message != "") {
      this.setState({ message: "" });
    }
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Parler à Tito</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={this.state.message}
            onChangeText={(message) => this.setState({ message })}
            returnKeyType="send"
            placeholder="Salut Tito !"
            width="80%"
          />
          <TouchableOpacity style={styles.button} onPress={this.send}>
            <Text style={styles.buttonText}>Envoyer</Text>
          </TouchableOpacity>
        </View>

        <Text>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flex: 1,
  },

  text: {
    textAlign: "center",
  },

  inputWrapper: {
    flexDirection: "row",
  },

  input: {
    borderBottomWidth: 2,
    borderColor: "#111",
  },

  button: {},

  buttonText: {},
});
