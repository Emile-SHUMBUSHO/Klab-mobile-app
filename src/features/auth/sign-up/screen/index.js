import { useState, useContext, useEffect } from "react";
import { Checkbox } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Input from "../component/input";
import Button from "../component/button";
import Loader from "../../../../components/loader";
import { AuthContext } from "../../../../context/AuthContext";

const SignUpScreen = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "parent", value: "parent" },
    { label: "member", value: "member" },
    { label: "guest", value: "guest" },
    { label: "company", value: "company" },
  ]);
  const [checked, setChecked] = useState(false);
  const context = useContext(AuthContext);
  const { register, isLoading } = context;
  console.log(isLoading);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
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
    if (!inputs.fullName) {
      handleErrors("please input full name", "fullName");
      isValid = false;
    }
    if (!inputs.password) {
      handleErrors("please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleErrors("Weak password", "password");
      isValid = false;
    }
    if (isValid) {
      SignUp();
    }
  };

  const SignUp = async () => {
    setLoading(true);
    register(inputs.fullName, inputs.email, inputs.password, inputs.role);
    // props.navigation.navigate("signIn");
  };

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <View style={styles.top}>
        <TouchableOpacity
          style={{ margin: 10, right: 100 }}
          onPress={() => {
            props.navigation.navigate("Onboarding");
          }}
        >
          <Entypo name="chevron-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Image
          source={require("../../../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "black",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Text style={{ fontWeight: "bold", fontSize: 18, margin: 1 }}>
              Hello
            </Text>
            <Text style={{ fontSize: 15, color: "#BABBC3" }}>
              Create an account to continue
            </Text>

            <Input
              style={styles.input}
              label="Full name"
              iconName="account-outline"
              placeholder="Enter Your Full Name"
              onChangeText={(text) => handleOnChange(text, "fullName")}
              onFocus={() => handleErrors(null, "fullName")}
              error={errors.fullName}
            />

            <Input
              style={styles.input}
              label="Email Address"
              placeholder="Enter your email address"
              iconName="email-outline"
              onChangeText={(text) => handleOnChange(text, "email")}
              error={errors.email}
              onFocus={() => {
                handleErrors(null, "email");
              }}
            />

            <Text style={styles.inputTitle}>Join As</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              zIndex={1000}
              onChangeValue={(value) => {
                handleOnChange(value, "role");
              }}
            />

            <Input
              onChangeText={(text) => handleOnChange(text, "password")}
              onFocus={() => handleErrors(null, "password")}
              iconName="lock-outline"
              label="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />

            <View style={styles.termsAndCondition}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <View>
                <Text style={{ color: "#BABBC3" }}>
                  By creating an account you agree to our
                </Text>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("terms");
                    }}
                  >
                    <Text style={{ fontWeight: "bold", left: 5 }}>
                      Terms of services
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ left: 10, color: "#BABBC3" }}>and</Text>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("policy");
                    }}
                  >
                    <Text style={{ fontWeight: "bold", left: 15 }}>
                      Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button title="Sign Up" onPress={validate} />

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "#BABBC3" }}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("signIn");
                  }}
                >
                  <Text style={{ fontWeight: "bold", left: 5 }}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: "25%",
    borderBottomLeftRadius: 50,
  },
  footer: {
    height: "75%",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
  },

  logo: {
    width: 100,
    height: 40,
  },

  picker: {
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
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  termsAndCondition: {
    flexDirection: "row",
    top: 10,
  },

  inputTitle: {
    color: "#BABBC3",
    margin: 3,
  },
  selectedValue: {
    color: "#BABBC3",
  },
});
