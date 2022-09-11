import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { fetchChild } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { childCard } from "./childComponent";
import { Notification } from "../../components/notification";
import { Button2 } from "../../components/button";

const ChildScreen = (props) => {
  const { Provinces, Districts, Sectors, Cells, Villages } = require("rwanda");
  const provinces = Provinces();
  console.log(provinces);
  const districts = Districts();
  console.log(districts);

  const sectors = Sectors();
  console.log(sectors);

  const cells = Cells();
  console.log(cells);

  const villages = Villages();
  console.log(villages);

  const { children } = useSelector((state) => state.child);
  const dispachChild = useDispatch();
  useEffect(() => {
    dispachChild(fetchChild());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
          Child
        </Text>
        <Notification
          title="5"
          onPress={() => props.navigation.navigate("notifications")}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: "85%",
          width: "100%",
        }}
      >
        {children?.map((child, index) => {
          return (
            <childCard
              key={child.id}
              id={child.id}
              names={child.names}
              program={child.program}
              status={child.status}
              date={child.date}
            />
          );
        })}
        <View style={styles.content}>
          <View style={styles.contentCard}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="profile" size={14} color="black" />
                <Text style={{ left: 5, fontWeight: "700" }}>
                  Weekend Program
                </Text>
              </View>
              <Entypo name="chevron-down" size={24} color="black" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#F0F7F4",
                  borderRadius: 10,
                  width: "50%",
                  height: 70,
                  padding: 10,
                }}
              >
                <Image
                  source={require("../../../assets/profile.jpg")}
                  style={{ width: 70, height: 60, borderRadius: 10 }}
                />
                <Text>Nice Manzi</Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F0F7F4",
                  borderRadius: 10,
                  width: "48%",
                  height: 70,
                  padding: 5,
                }}
              >
                <Text style={{ fontWeight: "700" }}>Program Details</Text>
                <Text>Cost:50,000Rwf</Text>
                <Text style={{ color: "green" }}>Account activated</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentCard}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="profile" size={14} color="black" />
                <Text style={{ left: 5, fontWeight: "700" }}>Day Program</Text>
              </View>
              <Entypo name="chevron-down" size={24} color="black" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#F0F7F4",
                  borderRadius: 10,
                  width: "50%",
                  height: 70,
                  padding: 10,
                }}
              >
                <Image
                  source={require("../../../assets/profile.jpg")}
                  style={{ width: 70, height: 60, borderRadius: 10 }}
                />
                <Text>Nice Manzi</Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F0F7F4",
                  borderRadius: 10,
                  width: "48%",
                  height: 70,
                  padding: 5,
                }}
              >
                <Text style={{ fontWeight: "700" }}>Program Details</Text>
                <Text>Cost:50,000Rwf</Text>
                <Text style={{ color: "red" }}>Account not activated</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 10,
              }}
            >
              <Button2
                onPress={() => props.navigation.navigate("payment")}
                title="Activate"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChildScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
  },
  top: {
    height: "15%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  contentCard: {
    width: "95%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    margin: 10,
  },
  activateBtn: {
    width: "40%",
    backgroundColor: "green",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  addBtn: {
    width: "40%",
    backgroundColor: "black",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
