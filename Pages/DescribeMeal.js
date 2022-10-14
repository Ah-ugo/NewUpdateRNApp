import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import React from "react";

export default function DescribeMeal({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headNav}>
          <Image source={require("../assets/arrow.png")} />
          {/* <Button title={} /> */}
          <Text style={styles.editText}>Edit</Text>
        </View>
        <Text style={styles.describeMeal}>Describe your meal</Text>
        <Text style={styles.giveMealTitle}>Give this meal a title</Text>
        <Text style={styles.porkEggs}>Pork and Eggs</Text>
        <Text style={styles.ingredients}>
          List all the required ingredients and their measurements
        </Text>
        <Text style={styles.serveAsModel}>
          Kindly use one meal serving as a model
        </Text>
        <Text style={styles.description}>
          Give us a description. How do you want your meal to be prepared?
        </Text>
        <Text style={styles.prepareRecipe}>
          How do you prepare this recipe?
        </Text>
        <Text style={styles.leaveNote}>
          Leave a note (e.g Wash Beans with lukewarm water and proceed to boil
          for 45 minutes)
        </Text>
        <Text style={styles.instruction}>Any special instructions?</Text>
        <View style={styles.btnView}>
          <Button title="Submit recipe" color="#26C867" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginLeft: 22,
    marginRight: 28,
  },
  editText: {
    fontWeight: "900",
    fontSize: 18,
    // lineHeight: 25px;
    color: "#26C867",
  },
  headNav: {
    // display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignContent: "flex-end",
  },
  describeMeal: {
    fontWeight: "800",
    fontSize: 24,
  },
  giveMealTitle: {
    fontWeight: "800",
    fontSize: 18,
    marginTop: 29,
  },
  porkEggs: {
    fontWeight: "300",
    fontSize: 18,
  },
  ingredients: {
    fontWeight: "800",
    fontSize: 18,
    marginTop: 47,
  },
  serveAsModel: {
    color: "#9D9D9D",
    fontWeight: "900",
    fontSize: 14,
  },
  description: {
    color: "#303030",
    fontWeight: "300",
    fontSize: 18,
    marginTop: 14,
  },
  prepareRecipe: {
    fontWeight: "800",
    fontSize: 18,
    marginTop: 47,
  },
  leaveNote: {
    color: "#303030",
    fontWeight: "300",
    fontSize: 18,
    marginTop: 29,
  },
  instruction: {
    fontWeight: "800",
    fontSize: 18,
    marginTop: 47,
    marginBottom: 269,
  },
  btnView: {
    marginBottom: 51,
  },
});
