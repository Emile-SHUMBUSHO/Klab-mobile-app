import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/actions/register.child";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import Loader from "../../../components/loader";
import ModalPoup from "../../../components/modalPoup";
const RegisterScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(null);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const selectedDate = new Date(date);
    const chosenDate = `${selectedDate.getDate()}-${
      selectedDate.getMonth() + 1
    }-${selectedDate.getFullYear()}`;
    setInputs({ ...inputs, age: chosenDate });
    hideDatePicker();
  };

  const { id } = route.params;
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
    age: `${date}`,
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
    setIsLoading(true);
    setVisible(true);
  };
  return (
    <View style={styles.container}>
      <Loader visible={isLoading} />
      <ModalPoup visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
                source={require("../../../../assets/x.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ModalPoup>
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
            style={styles.datePickerButton}
            onPress={showDatePicker}
          >
            <Text>Age {date}</Text>
            <MaterialIcons name="date-range" size={24} color="black" />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
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

  datePickerButton: {
    height: 50,
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
    top: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
