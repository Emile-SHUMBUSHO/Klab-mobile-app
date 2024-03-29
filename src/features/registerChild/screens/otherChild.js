import { useState } from "react";
import Input from "../../../components/input";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";

const RegisterAnotherScreen = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "summer coding", value: "parent" },
    { label: "vacational", value: "member" },
  ]);
  const twoOptAlert = () => {
    Alert.alert(
      "Child Registered Succefully",
      "Wants to Register other Child",
      [
        {
          text: "Yes",
          onPress: () => {
            props.navigation.navigate("home");
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
              <Input style={styles.input} placeholder="Child Names" />

              <Input style={styles.input} placeholder="Child Age" />

              <Input style={styles.input} placeholder="Child Email" />

              <DropDownPicker
                style={styles.dropDownPicker}
                placeholder="Choose Program"
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

              <Input style={styles.input} placeholder="Home Address" />
              <Input
                style={styles.input}
                placeholder="Mother or Father Tel Number"
              />

              <Input
                style={styles.input}
                placeholder="Guadian or Maide Tel Number"
              />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={twoOptAlert}
                >
                  <Text style={{ color: "#FFFF" }}>Save Child Information</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterAnotherScreen;

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
    padding: 20,
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
  inputTitle: {
    color: "#3F3E3C",
    margin: 3,
  },
});
