import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar visible={true} barStyle="default" />
      <View style={styles.statWrapper}>
        <Text style={[styles.stat, { backgroundColor: "#45aaf2" }]}>
          <AntDesign name="heart" size={18} color="#FFF" /> Stanté
        </Text>
        <Text style={[styles.stat, { backgroundColor: "#20bf6b" }]}>
          <MaterialCommunityIcons name="food-apple" size={20} color="#FFF" />{" "}
          Faim
        </Text>
        <Text style={[styles.stat, { backgroundColor: "#f7b731" }]}>
          <Entypo name="emoji-happy" size={18} color="#FFF" /> Humeur
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <Image source={require("./assets/robot.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  statWrapper: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  stat: {
    flex: 1,
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
  },
});
