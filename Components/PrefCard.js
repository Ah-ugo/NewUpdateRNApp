import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PrefCard() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.mainFlex}>
          <Image source={require("../assets/foodbowl.png")} />
          <View>
            <Text>My preference</Text>
            <Text>Create, edit and view your own preferences</Text>
          </View>
          <Ionicons name="add-circle-outline" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#EEEEEE",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 16,
    shadowRadius: 4,
    elevation: 50,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 19,
    paddingBottom: 19,
  },
  mainFlex: {
    display: "flex",
    flexDirection: "row",
  },
});
