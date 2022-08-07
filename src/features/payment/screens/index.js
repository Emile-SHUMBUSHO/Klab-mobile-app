import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
} from "react-native";

import { Fontisto, Entypo, Ionicons } from "@expo/vector-icons";

const PaymentScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.buttonCloseView}>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name="close" size={24} color="black" />
              </Pressable>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.input}
                label="Card Number"
                activeUnderlineColor="transparent"
                underlineColor="transparent"
              />

              <TextInput
                style={styles.input}
                label="Expire Date"
                activeUnderlineColor="transparent"
                underlineColor="transparent"
              />

              <TextInput
                style={styles.input}
                label="CCV"
                activeUnderlineColor="transparent"
                underlineColor="transparent"
              />

              <TextInput
                style={styles.input}
                label="Card Holders Name"
                activeUnderlineColor="transparent"
                underlineColor="transparent"
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity style={styles.submitBtn}>
                <Text style={{ color: "#FFFF" }}>Pay Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            style={{ right: 40 }}
            onPress={() => {
              props.navigation.navigate("home");
            }}
          >
            <Entypo name="chevron-left" size={24} color="black" left={20} />
          </TouchableOpacity>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Select Payment Method
          </Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.pymentIcon}
            onPress={() => setModalVisible(true)}
          >
            <Fontisto name="mastercard" size={100} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pymentIcon}
            onPress={() => setModalVisible(true)}
          >
            <Fontisto name="visa" size={100} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pymentIcon}
            onPress={() => setModalVisible(true)}
          >
            <Fontisto name="paypal" size={100} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pymentIcon}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={require("../../../../assets/mtn.png")}
              style={{ width: 150, height: 120 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pymentIcon}
            onPress={() => setModalVisible(true)}
          >
            <Image
              borderRadius={10}
              source={require("../../../../assets/airtel.png")}
              style={{ width: 150, height: 100 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  centeredView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonCloseView: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  buttonClose: {
    margin: 20,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  top: {
    height: "15%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#fff",
    height: "85%",
    width: "100%",
    alignItems: "center",
  },
  pymentIcon: {
    margin: 5,
  },
  input: {
    width: "80%",
    height: 45,
    borderRadius: 50,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
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

  submitBtn: {
    width: "30%",
    backgroundColor: "#3F3E3C",
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  inputTitle: {
    color: "#3F3E3C",
    margin: 3,
  },
});
