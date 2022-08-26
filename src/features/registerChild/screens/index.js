import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/actions/register.child";
import DatePicker from "react-native-date-picker";

const RegisterScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    educationLevel: "",
    schoolName: "",
    email: "",
    id: `${id}`,
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
      registerChild();
    }
  };

  const dispatch = useDispatch();
  const registerChild = () => {
    dispatch(
      register(
        inputs.firstName,
        inputs.lastName,
        inputs.gender,
        inputs.age,
        inputs.educationLevel,
        inputs.schoolName,
        inputs.email,
        inputs.id
      )
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={{ right: 120 }}
          onPress={() => navigation.goBack("home")}
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
          <Input
            style={styles.input}
            placeholder="First Name"
            onChangeText={(text) => handleOnChange(text, "firstName")}
            onFocus={() => handleErrors(null, "firstName")}
            error={errors.firstName}
          />
          <Input
            style={styles.input}
            placeholder="Last Name"
            onChangeText={(text) => handleOnChange(text, "lastName")}
            onFocus={() => handleErrors(null, "lastName")}
            error={errors.lastName}
          />
          <DropDownPicker
            style={styles.dropDownPicker}
            placeholder="Choose your Gender"
            onChangeValue={(value) => handleOnChange(value, "gender")}
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
          <TouchableOpacity
            onPress={() => setOpenDate(true)}
            activeOpacity={0.7}
            style={{
              height: 50,
              width: "100%",
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
              top: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ color: "black", fontSize: 14, margin: 10 }}>
              Age
            </Text>
          </TouchableOpacity>

          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <Input
            style={styles.input}
            placeholder="level of education"
            onChangeText={(text) => handleOnChange(text, "educationLevel")}
            error={errors.educationLevel}
            onFocus={() => {
              handleErrors(null, "educationLevel");
            }}
          />
          <Input
            style={styles.input}
            placeholder="School Name"
            onChangeText={(text) => handleOnChange(text, "schoolName")}
            error={errors.schoolName}
            onFocus={() => {
              handleErrors(null, "schoolName");
            }}
          />
          <Input
            style={styles.input}
            placeholder="Email"
            iconName={"email"}
            onChangeText={(text) => handleOnChange(text, "email")}
            error={errors.email}
            onFocus={() => {
              handleErrors(null, "email");
            }}
          />
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Button title="Save Child Information" onPress={validate} />
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
