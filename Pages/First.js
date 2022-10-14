import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Seperator from "../Components/Seperator";
import { StatusBar } from "expo-status-bar";

export default function First({ navigation }) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <StatusBar style="dark" backgroundColor="#E1E1E1" />
      </View>
      <View style={styles.container}>
        <Image source={require("../assets/Megaphone.png")} />
        <Text style={styles.eligibleTxt}>
          Before we finally approve your recipe, you must be eligible
        </Text>
        <Text style={styles.eligibileRules}>
          Eligible creators must follow our community guidelines, adhere to our
          Terms of Service and Privacy Policy, and maintain our criteria for
          eligibility, which state as follows:
        </Text>
        <Seperator />
        <View style={styles.listViewStyle}>
          <View style={styles.flexViewList}>
            <Ionicons name="checkmark-outline" size={20} color="green" />
            <Text style={styles.flexTxt}>
              Must have an account valid for, at least, 30 days
            </Text>
          </View>
          <View style={styles.flexViewList}>
            <Ionicons name="checkmark-outline" size={20} color="green" />
            <Text style={styles.flexTxt}>
              Recipe must pass safety moderation, endorsed by the FDA
            </Text>
          </View>
          <View style={styles.flexViewList}>
            <Ionicons name="checkmark-outline" size={20} color="green" />
            <Text style={styles.flexTxt}>Must meet the age requirement</Text>
          </View>
        </View>
        <View style={styles.btnbtn}>
          <Button
            title="Preview recipe"
            style={styles.btnbtn}
            color="#26C867"
            onPress={() => {
              navigation.navigate("Describe");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    color: "black",
    marginLeft: 14,
    marginRight: 14,
  },
  eligibleTxt: {
    textAlign: "center",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 20,
    // lineHeight: 102.9%,
  },
  eligibileRules: {
    textAlign: "center",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    marginBottom: 28,
    marginTop: 29,
  },
  listViewStyle: {
    marginBottom: 184,
    marginTop: 28,
  },
  flexViewList: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  flexTxt: {
    // textAlign: "center",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 16,
  },
  btnbtn: {
    fontSize: 18,
    fontWeight: "400",
    backgroundColor: "#26C867",
    borderRadius: 4,
    marginBottom: 51,
  },
});
