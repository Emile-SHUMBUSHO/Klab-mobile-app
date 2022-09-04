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
import { EmailToResetPassword } from "../../../redux/actions";
import ModalPoup from "../../../components/modalPoup";
const ForgotPasswordScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
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
    if (isValid) {
      RestPasswordFunc();
    }
  };

  const dispatch = useDispatch();
  const RestPasswordFunc = () => {
    dispatch(EmailToResetPassword(inputs.email));
    setLoading(true);
    setVisible(true);
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <ModalPoup visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("codeVerification");
              }}
            >
              <Image
                source={require("../../../../assets/x.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../../assets/success.png")}
            style={{ height: 150, width: 150, marginVertical: 10 }}
          />
        </View>

        <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}>
          Verification code sent to your email
        </Text>
      </ModalPoup>
      <View style={styles.top}>
        <TouchableOpacity
          style={{ margin: 10, right: 100 }}
          onPress={() => {
            props.navigation.navigate("signIn");
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
            Password Recovery
          </Text>
          <Text style={{ fontSize: 15, margin: 1 }}>
            Recovery code will be send on your email
          </Text>
          <Input
            style={styles.input}
            placeholder="Enter Your Email"
            iconName="email-outline"
            onChangeText={(text) => handleOnChange(text, "email")}
            error={errors.email}
            onFocus={() => {
              handleErrors(null, "email");
            }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button title="Send Code Recovery" onPress={validate} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

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
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
