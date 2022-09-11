import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { AntDesign, EvilIcons, Ionicons, Entypo } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { Button1 } from "../../components/button";
import Modal from "../../components/modalPoup";
import Input from "../../components/input";

export const RegisterCompanyScreen = (props) => {
  const [openModal, setOpenModel] = useState(false);
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

  const [inputs, setInputs] = useState({
    names: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleErrors = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleErrors("please input email address", "email");
      isValid = false;
    } else if (!inputs.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      handleErrors("please input valid email address", "email");
      isValid = false;
    }
    if (!inputs.firstName) {
      handleErrors("please input kids first name", "firstName");
      isValid = false;
    }
    if (!inputs.lastName) {
      handleErrors("please input kids last name", "lastName");
      isValid = false;
    }
    if (!inputs.gender) {
      handleErrors("please input kids gender", "gender");
      isValid = false;
    }
    if (!inputs.age) {
      handleErrors("please input kids age", "age");
      isValid = false;
    }
    if (!inputs.educationLevel) {
      handleErrors("please input kids education level", "educationLevel");
      isValid = false;
    }
    if (!inputs.schoolName) {
      handleErrors("please input kids school name", "schoolName");
      isValid = false;
    }
    if (isValid) {
      validate();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={{ right: 50 }}
          onPress={() => {
            props.navigation.navigate("home");
          }}
        >
          <Entypo name="chevron-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18 }}>
          Software Developers
        </Text>
      </View>
      <View style={styles.content}>
        <Modal visible={openModal}>
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
            <Input
              style={styles.Input}
              placeholder="Your position in Company"
            />
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
              <Button1 title="Cancel" onPress={() => setOpenModel(false)} />
              <Button1 title="Save" onPress={() => setOpenModel(false)} />
            </View>
          </ScrollView>
        </Modal>

        <View style={styles.insideContent}>
          <EvilIcons name="user" size={34} color="white" />
          <Text style={styles.text}>Personel information</Text>
          <AntDesign
            name="pluscircle"
            size={34}
            color="white"
            onPress={() => setOpenModel(true)}
          />
        </View>
        <View style={styles.insideContent}>
          <TouchableOpacity onPress={() => setOpenModel(true)}>
            <Ionicons name="md-business-sharp" size={34} color="white" />
          </TouchableOpacity>

          <Text style={styles.text}>Company information</Text>
          <TouchableOpacity onPress={() => setOpenModel(true)}>
            <AntDesign name="pluscircle" size={34} color="white" />
          </TouchableOpacity>
        </View>
        <Button1 title="Register" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  top: {
    height: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    height: "85%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  insideContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    margin: 10,
    width: "80%",
    height: 50,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  modalContent: {
    height: "80%",
  },
  touchableOpacity: {
    flexDirection: "row",
    margin: 10,
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
