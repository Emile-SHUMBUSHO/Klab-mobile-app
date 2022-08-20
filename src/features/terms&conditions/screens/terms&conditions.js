import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const TermsAndConditionsScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("signUp");
          }}
        >
          <Entypo name="chevron-left" size={24} color="black" left={20} />
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 18, left: 60 }}>
          Terms and Conditions
        </Text>
      </View>
      <View>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.termsContent}>
            <Text>
              Terms of service also known as terms of use and terms and
              conditions, commonly abbreviated as TOS or ToS, ToU or T&C are the
              legal agreements between a service provider and a person who wants
              to use that service. The person must agree to abide by the terms
              of service in order to use the offered service.1 Terms of service
              can also be merely a disclaimer, especially regarding the use of
              websites. Vague language and lengthy sentences used in the terms
              of use have brought concerns on customer privacy and raised public
              awareness in many ways.
            </Text>
            <Text>Section 1: Who we are ?</Text>
            <Text>Section 2: Definitions</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TermsAndConditionsScreen;

const styles = StyleSheet.create({
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
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  content: {
    backgroundColor: "lightgrey",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    height: "80%",
  },
  termsContent: {
    margin: 20,
  },
});
