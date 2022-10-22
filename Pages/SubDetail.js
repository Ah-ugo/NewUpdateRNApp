import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import PACard from "../Components/PACard";
import PrefCard from "../Components/PrefCard";
import Seperator from "../Components/Seperator";

export default function SubDetail() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <LinearGradient
          colors={["#30D0A0", "#086167"]}
          style={styles.mainGradient}>
          <View style={styles.gradientWrapper}>
            <View style={styles.editIcon}>
              <Ionicons name="create-outline" size={32} color="white" />
            </View>
            <View style={styles.dataDetail}>
              <Image
                source={require("../assets/avatar.png")}
                style={styles.avatar}
              />
              <Text style={styles.name}>Harriet Morrison</Text>
              <Text style={styles.email}>harrietmarrison@gmail.com</Text>
            </View>
            <View>
              <View style={styles.planContainer}>
                <View style={styles.Iconplan}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={32}
                    color="white"
                  />
                  <View>
                    <Text style={styles.price}>₦40,000</Text>
                    <Text style={styles.month}>/Month</Text>
                  </View>
                </View>
                <Text style={styles.individual}>Individual</Text>
              </View>
            </View>
            <View style={styles.mainDateContainer}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>STARTED ON</Text>
                <Text style={styles.dateDate}>7 Oct 2022</Text>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>ENDS ON</Text>
                <Text style={styles.dateDate}>7 Nov 2022</Text>
              </View>
            </View>
            <View style={styles.cancelWrapper}>
              <Image source={require("../assets/close.png")} />
              <Text style={styles.cancelSub}>CANCEL SUBSCRIPTION</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.paContainer}>
        <Text style={styles.paText}>Personal assistance</Text>
        <View>
          <PACard
            title="Dietician"
            name="Amanda Sarah"
            phone="+234-818-360-9852"
            mail="amandasarah@oomasupport.com"
          />
          <PACard
            title="Customer Care Rep"
            name="Chiamaka Orji"
            phone="+234-818-360-9852"
            mail="chiamaka@oomasupport.com"
          />
          <PrefCard />
          <View style={styles.seperate}>
            <Seperator />
          </View>
        </View>
        <View style={styles.phoneflex}>
          <Text style={styles.phoneTxt}>Phone number</Text>
          <Text style={styles.phoneNo}>+2348122776780</Text>
        </View>
        <View style={styles.addresslabelBg}>
          <Text style={styles.addressLabel}>SAVED ADDRESSES</Text>
        </View>
        <View style={styles.addressIconTxt}>
          <Image
            source={require("../assets/send.png")}
            style={styles.addressIcon}
          />
          <View>
            <Text style={styles.addressTxt}>
              No. 290 Agbani road, Awknanaw, Enugu
            </Text>
          </View>
        </View>
        <View style={styles.viewAllContainer}>
          <Text style={styles.viewAllTxt}>View all</Text>
          <Seperator />
        </View>
        <View>
          <View style={styles.footIconTxt}>
            <Ionicons
              style={styles.footIcon}
              name="refresh-circle-outline"
              size={20}
            />
            <Text style={styles.footTxt}>History</Text>
          </View>
          <View style={styles.footIconTxt}>
            <Ionicons style={styles.footIcon} name="people" size={20} />
            <Text style={styles.footTxt}>Invite a friend</Text>
          </View>
          <View style={styles.footIconTxt}>
            <Ionicons style={styles.footIcon} name="person-remove" size={20} />
            <Text style={styles.footTxt}>Log out</Text>
          </View>

          <Text style={styles.footMore}>More</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  dataDetail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 100,
    backgroundColor: "#916e43",
    borderColor: "#916e43",
    borderWidth: 4,
  },
  name: {
    fontWeight: "900",
    fontSize: 24,
    color: "white",
  },
  email: {
    fontWeight: "400",
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 15,
  },
  editIcon: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  gradientWrapper: {
    marginRight: 20,
    marginLeft: 20,
    paddingTop: 20,
  },
  price: {
    fontWeight: "900",
    fontSize: 20,
    color: "white",
  },
  month: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
  },
  planContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#D9D9D9",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  individual: {
    fontWeight: "900",
    fontSize: 16,
    color: "#D5D5D5",
  },
  Iconplan: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateContainer: {
    display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#D9D9D9",
    padding: 10,
    borderRadius: 8,
    // alignItems: "center",
  },
  mainDateContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 38,
  },
  dateText: {
    fontWeight: "400",
    fontSize: 16,
    color: "white",
  },
  dateDate: {
    fontWeight: "900",
    fontSize: 16,
    color: "white",
  },
  cancelSub: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
    paddingLeft: 10,
  },
  cancelWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 22,
  },
  mainGradient: {
    borderBottomRightRadius: 27,
    borderBottomLeftRadius: 27,
  },
  paText: {
    fontWeight: "900",
    fontSize: 20,
  },
  paContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  seperate: {
    marginBottom: 38,
  },
  phoneflex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  phoneTxt: {
    fontWeight: "900",
    fontSize: 18,
  },
  phoneNo: {
    fontWeight: "300",
    fontSize: 16,
  },
  addresslabelBg: {
    backgroundColor: "#F6F6F6",
    borderRadius: 4,
  },
  addressLabel: {
    fontWeight: "800",
    fontSize: 14,
    color: "#C4C4C4",
    padding: 13,
  },
  addressIconTxt: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8FFEF",
    borderRadius: 5,
    marginTop: 12,
  },
  addressTxt: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 19,
    paddingTop: 12,
    paddingBottom: 12,
    color: "#C4C4C4",
    marginRight: 92,
  },
  addressIcon: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  viewAllTxt: {
    fontWeight: "900",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 16,
    marginBottom: 39,
    color: "#26C867",
  },
  viewAllContainer: {
    marginBottom: 24,
  },
  footTxt: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 34,
  },
  footIconTxt: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    alignContent: "center",
  },
  footIcon: {
    // backgroundColor: "#1F1F1F",
  },
  footMore: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 29,
    color: "#1F1F1F",
  },
});
