import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export const ChildCard = (props) => {
  const { firstName, lastName } = props;
  return (
    <View style={styles.contentCard}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="profile" size={14} color="black" />
          <Text style={{ left: 5, fontWeight: "700" }}>Weekend Program</Text>
        </View>
        <Entypo name="chevron-down" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 10,
            width: "20%",
            height: 70,
            padding: 10,
          }}
        >
          <Image
            source={require("../../../assets/profile.jpg")}
            style={{ width: 70, height: 60, borderRadius: 10 }}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            width: "70%",
            height: 70,
            padding: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>
            {firstName} {lastName}
          </Text>
          <Text>Cost:50,000Rwf</Text>
          <Text style={{ color: "green" }}>Account activated</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentCard: {
    width: "95%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    margin: 10,
  },
});
