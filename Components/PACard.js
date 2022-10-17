import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

export default function PACard(props) {
  return (
    <View>
      <View style={styles.Container}>
        <View>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../assets/avatar.png")}
              style={styles.avatar}
            />
            <Text style={styles.dietician}>{props.title}</Text>
          </View>
          <Text style={styles.dieticianName}>{props.name}</Text>
          <Text style={styles.phone}>{props.phone}</Text>
          <Text style={styles.mail}>{props.mail}</Text>
        </View>
        <View>
          <LinearGradient colors={["#02AAB0", "#00CDAC"]} style={styles.grad}>
            <Ionicons name="call-outline" style={styles.icon} />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F8FFEF",
    borderWidth: 1,
    borderColor: "#EBFFD1",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 17,
    paddingTop: 15,
    marginTop: 13,
  },
  icon: {
    color: "white",
    fontSize: 18,
    padding: 9,
  },
  grad: {
    borderRadius: 20,
  },
  avatar: {
    width: 39,
    height: 39,
    borderRadius: 100,
    marginRight: 10,
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    // justifyContent: "space-between",
  },
  dietician: {
    fontWeight: "900",
    fontSize: 18,
  },
  dieticianName: {
    fontWeight: "500",
    fontSize: 18,
  },
  phone: {
    fontWeight: "300",
    fontSize: 14,
    color: "#9D9D9D",
  },
  mail: {
    fontWeight: "300",
    fontSize: 14,
    color: "#9D9D9D",
  },
});
