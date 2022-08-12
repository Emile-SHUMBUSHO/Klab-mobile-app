import * as React from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const RegisterScreen = (props) => {
  const twoOptAlert = () => {
    Alert.alert(
      "Child Registered Succefully",
      "Wants to Register other Child",
      [
        {
          text: "Yes",
          onPress: () => {
            props.navigation.navigate("anotherChild");
          },
        },
        {
          text: "No",
          onPress: () => {
            props.navigation.navigate("home");
          },
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={{ right: 120 }}
          onPress={() => {
            props.navigation.navigate("home");
          }}
        >
          <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white" }}>Register Child</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            label="Child Names"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
          />

          <TextInput
            style={styles.input}
            label="Child Age"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
          />

          <TextInput
            style={styles.input}
            label="Child Email"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
          />

          <TextInput
            style={styles.input}
            label="summer code"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
          />

          <TextInput
            style={styles.input}
            label="Home Address"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
          />

          <TextInput
            style={styles.input}
            label="Mother or Father"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
          />

          <TextInput
            style={styles.input}
            label="Guadian or Maide"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
          />

          <TouchableOpacity style={styles.submitBtn} onPress={twoOptAlert}>
            <Text style={{ color: "#FFFF" }}>Save Child Information</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  top: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  input: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    margin: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },

  submitBtn: {
    width: "70%",
    backgroundColor: "black",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  inputTitle: {
    color: "#3F3E3C",
    margin: 3,
  },
});
