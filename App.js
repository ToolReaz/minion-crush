import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Stanté</Text>
        <Text>Faim</Text>
        <Text>Humeur</Text>
      </View>
      <Image source={require("./assets/robot.png")} />
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity>
        <Text>Actions</Text>
      </TouchableOpacity>
      <View>
        <TextInput />
        <TouchableOpacity>
          <Text>></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
