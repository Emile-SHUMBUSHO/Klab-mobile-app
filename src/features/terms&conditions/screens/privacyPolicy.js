import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const PrivacyPolicyScreen = (props) => {
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
        <Text style={{ color: "#fff", fontSize: 18, left: 100 }}>
          Privacy Policy
        </Text>
      </View>
      <View>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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
              profile picture, hotos or avata, gendr, age, ethnicity, religion,
              marital sttus, ecationa lvel, inteests, hobbie precise
              location-bsd nrmto, email nd maing addesse, phone numbers, devic I
              numbranwodhen crea a acout for our Services “Boost Account, an ay
              othe you diectly give us through the Services incluing, but no
              limited to messages that you send throu
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
    backgroundColor: "black",
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
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
