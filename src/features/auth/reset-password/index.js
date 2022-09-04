import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Input from "../../../components/input";
import Button from "../../../components/button";
import Loader from "../../../components/loader";
import { useDispatch } from "react-redux";
import { PasswordReset } from "../../../redux/actions";

const TypeNewPasswordScreen = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
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
    if (!inputs.password) {
      handleErrors("please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleErrors("Weak password", "password");
      isValid = false;
    }
    if (isValid) {
      TypeNewPasswordFunc();
    }
  };
  const code = route.params;
  const dispatch = useDispatch();
  const TypeNewPasswordFunc = () => {
    dispatch(PasswordReset(code, inputs.password));
    // setLoading(true);
    // props.navigation.navigate("codeVerification");
    // setLoading(false);
  };
  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <View style={styles.top}>
        <TouchableOpacity
          style={{ margin: 10, right: 100 }}
          onPress={() => {
            navigation.goBack("signIn");
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
            Type New Password
          </Text>
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button title="Reset Password" onPress={validate} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TypeNewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: "25%",
    borderBottomLeftRadius: 50,
  },
  logo: {
    width: 100,
    height: 40,
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
});
