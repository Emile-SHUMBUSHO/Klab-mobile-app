import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Button2 } from "../../components/button";
import { AntDesign } from "@expo/vector-icons";

export const CompanyScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ color: "white", fontSize: 18 }}>Register Company</Text>
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.insideContent}>
            <ImageBackground
              source={require("../../../assets/s4.jpg")}
              style={styles.imagebg}
              resizeMode="cover"
              borderTopLeftRadius={15}
              borderTopRightRadius={15}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("companyRegistration");
                }}
              >
                <AntDesign name="forward" size={34} color="white" />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bottomContent}>
              <Text>Looking for interns?</Text>
              <Button2
                onPress={() => {
                  props.navigation.navigate("companyRegistration");
                }}
                title="Register"
              />
            </View>
          </View>

          <View style={styles.insideContent}>
            <ImageBackground
              source={require("../../../assets/projects.jpg")}
              style={styles.imagebg}
              resizeMode="cover"
              borderTopLeftRadius={15}
              borderTopRightRadius={15}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("companyRegistration");
                }}
              >
                <AntDesign name="forward" size={34} color="white" />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bottomContent}>
              <Text>Have a project to work on?</Text>
              <Button2
                onPress={() => {
                  props.navigation.navigate("companyRegistration");
                }}
                title="Register"
              />
            </View>
          </View>
          <View style={styles.insideContent}>
            <ImageBackground
              source={require("../../../assets/developer.jpg")}
              style={styles.imagebg}
              resizeMode="cover"
              borderTopLeftRadius={15}
              borderTopRightRadius={15}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("companyRegistration");
                }}
              >
                <AntDesign name="forward" size={34} color="white" />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bottomContent}>
              <Text>Hire Software Developers</Text>
              <Button2
                onPress={() => {
                  props.navigation.navigate("companyRegistration");
                }}
                title="Register"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  top: {
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    height: "85%",
  },
  insideContent: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    borderRadius: 15,
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    padding: 10,
  },
  touchableOpacity: {
    flexDirection: "row",
    margin: 10,
  },
  imagebg: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
  },
});
