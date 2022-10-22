import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PrefCard() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.mainFlex}>
          <View style={styles.subFlex}>
            <Image
              source={require("../assets/foodbowl.png")}
              style={styles.bowl}
            />
            <View>
              <Text style={styles.preftxt}>My preference</Text>
              <Text style={styles.createPref}>
                Create, edit and view your own
              </Text>
              <Text style={styles.createPref}>preferences</Text>
            </View>
          </View>
          <Ionicons name="add-circle-outline" style={styles.Icon} />
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
    borderRadius: 7,
    marginTop: 28,
    marginBottom: 32,
  },
  mainFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // alignContent: "space-between",
  },
  preftxt: {
    fontWeight: "900",
    fontSize: 18,
    letterSpacing: -1,
  },
  createPref: {
    fontWeight: "400",
    fontSize: 14,
    color: "#9D9D9D",
  },
  Icon: {
    color: "#26C867",
    fontSize: 32,
  },
  bowl: {
    marginRight: 10,
  },
});
