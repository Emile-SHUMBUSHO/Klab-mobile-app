import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TopNavigator from "../../navigation/topNavigator";
import { ScrollView } from "react-native-gesture-handler";
const ChildScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ color: "white", fontSize: 18 }}>All About Your Kid</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: "85%",
          width: "100%",
        }}
      >
        <View style={styles.content}>
          <View style={styles.contentCard}>
            <Image
              source={require("../../../assets/man.png")}
              style={{ width: 100, height: 100 }}
            />
            <Text>Emmilly Keza</Text>
            <Text>Program: summer coding</Text>
            <AntDesign name="checkcircleo" size={24} color="green" />
            <Text>From 09-07-2022 to 09-08-2022</Text>
          </View>

          <View style={styles.contentCard}>
            <Image
              source={require("../../../assets/man.png")}
              style={{ width: 100, height: 100 }}
            />
            <Text>Emmilly Keza</Text>
            <Text>Program: summer coding</Text>
            <Text>Account Not Activated Please Activate</Text>
            <TouchableOpacity
              style={styles.activateBtn}
              onPress={() => {
                props.navigation.navigate("payment");
              }}
            >
              <Text style={{ color: "#FFFF" }}>Activate</Text>
            </TouchableOpacity>
            <Text>From 09-07-2022 to 09-08-2022</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChildScreen;

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
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  contentCard: {
    width: "90%",
    flexDirection: "column",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  activateBtn: {
    width: "40%",
    backgroundColor: "green",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  addBtn: {
    width: "40%",
    backgroundColor: "black",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
