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
          <Entypo name="chevron-left" size={24} color="white" left={20} />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 18, left: 60 }}>
          Terms and Conditions
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.termsContent}>
          <Text>
            Terms of service aso known as ms of use and terms and conditions,
            commonly abbreviated as TOS oToS, ToU orT& re the legal agreements
            between a service rovider and a person wh wantstoue that service.
            The personmustagre to aide by the terms f sevice in order to se the
            offered srvice1 Trms of service can also b merely a disclaimer,
            especially regarding the use of websites. Vague language and lengthy
            sentences ued n the terms of use have brought concerns on customer
            privacy and raised public awa
          </Text>
          <Text>Section 1: Who we are ?</Text>
          <Text>Section 2: Definitions</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditionsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
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
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  termsContent: {
    margin: 20,
  },
});
