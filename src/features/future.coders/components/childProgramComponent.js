import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
export const ChildPogramComponent = (props) => {
  const { fees, navigation } = props;
  return (
    <TouchableOpacity onPress={navigation}>
      <View style={styles.programCard}>
        <Text style={{ color: "white" }}>Vacatinal Program</Text>
        <Text style={{ color: "white" }}>FRW: {fees}</Text>
        <Feather
          name="plus-circle"
          size={34}
          color="white"
          style={{ margin: 10 }}
        />
        <Text style={{ fontSize: 10, color: "white" }}>
          12-03-2022 to 23-05-2022
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  programCard: {
    width: 200,
    margin: 10,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#3F3E3C",
  },
});
