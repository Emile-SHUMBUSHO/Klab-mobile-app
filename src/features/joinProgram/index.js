import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import Input from "../../components/input";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

const JoinScreen = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Text style={{ color: "white" }}>Join TechUpSkill</Text>
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
              <Input style={styles.input} placeholder="Enter Your Full Name" />

              <Input
                style={styles.input}
                iconName="email"
                placeholder="Enter Your Email"
              />

              <Input
                style={styles.input}
                iconName="phone"
                placeholder="Enter Your Phone Number"
              />
              <Input style={styles.input} placeholder="Province" />
              <Input style={styles.input} placeholder="District" />
              <Input style={styles.input} placeholder="Sector" />
              <Input style={styles.input} placeholder="Cell" />
              <Input style={styles.input} placeholder="Village" />
              <Input style={styles.input} placeholder="Age" />
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
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
              />
              <Input style={styles.input} placeholder="Academic Study" />

              <Input style={styles.input} placeholder="Field of study" />

              <Input
                style={styles.input}
                placeholder="Tell us about your self"
              />

              <Input style={styles.input} placeholder="Do you have a project" />

              <Input style={styles.input} placeholder="Project GitHub Link" />

              <Input style={styles.input} placeholder="Resume" />

              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.submitBtn}>
                  <Text style={{ color: "#FFFF" }}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default JoinScreen;

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

  submitBtn: {
    width: "70%",
    backgroundColor: "black",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
