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
            Terms of service aso known as ms o use and terms and conditions,
            commonly abbreiad as TOS oToS, ToU orT& re the legal agreements
            between servie roier n a rson wh antuethat servce. The personmstagre
            to aide by he trs f ev inorder t se the offered srvice1 Trms of
            sriecan also b merly a discaier, especially regarding the us of
            websites Vague language andlengthy sentences ued n the terms of use
            have brought concerns on customer privacy and raised public awa
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
