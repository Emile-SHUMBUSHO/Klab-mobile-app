import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Input from "../../../components/input";

const CompleteProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={{ right: 100 }}
          onPress={() => {
            props.navigation.navigate("home");
          }}
        >
          <Entypo name="chevron-left" size={24} color={"white"} />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18 }}>Complete Profile</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View style={styles.content}>
          {/* Profile card info.. */}
          <View style={styles.profile_card}>
            <Image
              source={require("../../../../assets/man.png")}
              style={{ width: 70, height: 70 }}
            />

            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Ishimwe Aimable
            </Text>
          </View>

          <Input
            style={styles.input}
            label="Address"
            placeholder="Home Address"
          />

          <Input
            style={styles.input}
            label="Telephone"
            placeholder="Telephone Number"
          />
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => {
              props.navigation.navigate("home");
            }}
          >
            <Text style={{ color: "#FFFF" }}>Save Information</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CompleteProfileScreen;

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
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    height: "85%",
    width: "100%",
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
  },

  profile_card: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "90%",
    height: 150,
    margin: 15,
  },

  input: {
    width: "85%",
  },

  submitBtn: {
    width: "40%",
    backgroundColor: "black",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
