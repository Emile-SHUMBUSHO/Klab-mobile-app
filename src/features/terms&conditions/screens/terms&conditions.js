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
            Terms of service aso known as ms use and terms and conditions,
            comonl abreiad as TOS oToS, oU orT& re the egal agreements between
            servie roier rsn antethat sevce. The prsonmstagre to aide by he trs
            f ev inorder e theofere srice1 Trmsof sriecan also b merly a
            discaier, eseially reging the s of websites Vague language andlenth
            setencs ued n the term of use have brought concerns on customer
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
