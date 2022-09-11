import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Modal from "../../components/modalPoup";
import Input from "../../components/input";
import { Ionicons, Entypo } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import Button from "../../components/button";

const KlabMembersHomeScreen = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ]);

  return (
    <View style={styles.container}>
      <Modal visible={openModal}>
        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 10 }}
        >
          <TouchableOpacity
            onPress={() => {
              setOpenModal(false);
            }}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.modalContent}
        >
          <Input style={styles.Input} placeholder="Names" />
          <Input style={styles.Input} placeholder="Email Address" />
          <Input style={styles.Input} placeholder="Phone Number" />
          <DropDownPicker
            style={styles.dropDownPicker}
            placeholder="Choose your Gender"
            onChangeValue={(value) => handleOnChange(value, "gender")}
            open={open1}
            value={value1}
            items={items1}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setItems1}
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
          <Input style={styles.Input} placeholder="Your position in Company" />
          <DropDownPicker
            style={styles.dropDownPicker}
            placeholder="Do you have any physical disability"
            onChangeValue={(value) => handleOnChange(value, "gender")}
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Button title="Submit" />
          </View>
        </ScrollView>
      </Modal>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("signIn");
          }}
        >
          <Entypo name="chevron-left" size={24} color="white" left={20} />
        </TouchableOpacity>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Klab Events
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "85%",
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View>
          <Text style={styles.text}>Upcomming Events</Text>
        </View>
        <View style={styles.content}>
          <ImageBackground
            source={require("../../../assets/pevent1.jpg")}
            borderRadius={10}
          >
            <View style={{ height: 200 }} />
          </ImageBackground>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ margin: 10, fontSize: 18, fontWeight: "bold" }}>
                Meet with MTN CEO
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setOpenModal(true);
                  }}
                  style={{
                    width: 100,
                    height: 25,
                    backgroundColor: "black",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    borderRadius: 25,
                  }}
                >
                  <Text style={{ color: "white" }}>Boot a seat</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{ margin: 10 }}>
                Last Evening @klabrw hosted our #StartupsDemoNight and various
                #techpreneurs showcased their solutions, & discussed how they
                can broaden and sustain their opportunities within the #local
                and #global
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>Recent Events</Text>
        </View>
        <View style={styles.content}>
          <ImageBackground
            source={require("../../../assets/pevent2.jpg")}
            borderRadius={10}
          >
            <View style={{ height: 200 }} />
          </ImageBackground>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ margin: 10, fontSize: 18, fontWeight: "bold" }}>
                Meet with MTN CEO
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              ></View>
            </View>
            <View>
              <Text style={{ margin: 10 }}>
                Last Evening @klabrw hosted our #StartupsDemoNight and various
                #techpreneurs showcased their solutions, & discussed how they
                can broaden and sustain their opportunities within the #local
                and #global
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
};

export default KlabMembersHomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  top: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
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
    margin: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
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
});
