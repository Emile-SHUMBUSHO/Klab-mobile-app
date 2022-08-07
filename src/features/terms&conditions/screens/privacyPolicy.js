import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

const PrivacyPolicyScreen = (props) => {
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
        <Text style={{ color: "black", fontSize: 18, left: 100 }}>
          Privacy Policy
        </Text>
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ margin: 20 }}>
            <Text>
              A privacy policy is a document that explains how an organization
              handles any customer, client or employee information gathered in
              its operations . Most websites make their privacy policies
              available to site visitors.
            </Text>
            <Text>what information do we collect about you?</Text>
            <Text>
              Personal Information from you, such as your first and last name,
              profile picture, photos or avatar, gender, age, ethnicity,
              religion, marital status, educational level, interests, hobbies,
              precise location-based information, e-mail and mailing addresses,
              phone numbers, device ID numbers and passwords when you create an
              account for our Services “Boost Account”, and any other
              information you directly give us through the Services including,
              but not limited to messages that you send through the Services.
            </Text>
            <Text>Cookies and google analytics</Text>
            <Text>
              Google Analytics uses a set of cookies to collect information and
              report site usage statistics without personally identifying
              individual visitors to Google.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  top: {
    height: "20%",
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
});
