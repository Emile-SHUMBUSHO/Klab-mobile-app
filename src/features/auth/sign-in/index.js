import { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Button from "../sign-up/component/button";
import Input from "../sign-up/component/input";
import Loader from "../../../components/loader";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../../../context/AuthContext";

const SignInScreen = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const context = useContext(AuthContext);
  const { login, isLoading } = context;
  console.log(isLoading);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
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

    if (!inputs.password) {
      handleErrors("please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleErrors("Weak password", "password");
      isValid = false;
    }
    if (isValid) {
      SingIn();
    }
  };

  const SingIn = async () => {
    setLoading(true);
    login(inputs.email, inputs.password);
    props.navigation.navigate("home");
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
            props.navigation.navigate("signUp");
          }}
        >
          <Entypo name="chevron-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <Image
          source={require("../../../../assets/logo.png")}
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
        <View style={styles.content}>
          <Text style={{ fontWeight: "bold", fontSize: 18, margin: 1 }}>
            welcome back!
          </Text>
          <Text style={{ fontSize: 15, margin: 1 }}>
            hello, there login to continue
          </Text>

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

          <Input
            onChangeText={(text) => handleOnChange(text, "password")}
            onFocus={() => handleErrors(null, "password")}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />

          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("recovery");
              }}
            >
              <Text style={{ fontWeight: "bold", margin: 10 }}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button title="Sign In" onPress={validate} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("signUp");
                }}
              >
                <Text style={{ fontWeight: "bold", left: 5 }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  inputTitle: {
    color: "#3F3E3C",
    margin: 3,
  },
});
