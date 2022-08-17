import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../../components/input";
const RegisterScreen = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
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
          <Input style={styles.input} placeholder="First Name" />
          <Input style={styles.input} placeholder="Last Name" />
          <DropDownPicker
            style={styles.dropDownPicker}
            placeholder="Choose your Gender"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            zIndex={1000}
            borderWidth={0}
            dropDownContainerStyle={{
              borderWidth: 0,
              height: 100,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              paddingHorizontal: 5,
              borderRadius: 20,
            }}
          />
          <Input style={styles.input} placeholder="Age" />
          <Input style={styles.input} placeholder="level of education" />
          <Input style={styles.input} placeholder="School Name" />
          <Input style={styles.input} placeholder="Email" />
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <TouchableOpacity style={styles.submitBtn} onPress={twoOptAlert}>
              <Text style={{ color: "#FFFF" }}>Save Child Information</Text>
            </TouchableOpacity>
          </View>
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

    padding: 10,
  },

  submitBtn: {
    width: "50%",
    backgroundColor: "black",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  dropDownPicker: {
    height: 50,
    top: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0,
    borderRadius: 20,
  },
  inputTitle: {
    color: "#3F3E3C",
    margin: 3,
  },
});
