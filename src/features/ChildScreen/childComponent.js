import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const childCard = (props) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
});
