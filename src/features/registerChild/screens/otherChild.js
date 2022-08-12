import { useState } from "react";
import { TextInput } from "react-native-paper";
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

  // import React from 'react';
  // import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

  // const KeyboardAvoidingComponent = () => {
  //   return (
  //     <KeyboardAvoidingView
  //       behavior={Platform.OS === "ios" ? "padding" : "height"}
  //       style={styles.container}
  //     >
  //       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //         <View style={styles.inner}>
  //           <Text style={styles.header}>Header</Text>
  //           <TextInput placeholder="Username" style={styles.textInput} />
  //           <View style={styles.btnContainer}>
  //             <Button title="Submit" onPress={() => null} />
  //           </View>
  //         </View>
  //       </TouchableWithoutFeedback>
  //     </KeyboardAvoidingView>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1
  //   },
  //   inner: {
  //     padding: 24,
  //     flex: 1,
  //     justifyContent: "space-around"
  //   },
  //   header: {
  //     fontSize: 36,
  //     marginBottom: 48
  //   },
  //   textInput: {
  //     height: 40,
  //     borderColor: "#000000",
  //     borderBottomWidth: 1,
  //     marginBottom: 36
  //   },
  //   btnContainer: {
  //     backgroundColor: "white",
  //     marginTop: 12
  //   }
  // });

  // export default KeyboardAvoidingComponent;
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
                }}
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

  dropDownPicker: {
    width: "100%",
    height: 50,
    borderWidth: 0,
    borderRadius: 30,
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
