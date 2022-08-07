import { View, Text, StyleSheet } from "react-native";
const MasterCardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ color: "black", fontSize: 18 }}>
          Select Payment Method
        </Text>
      </View>
      <View style={styles.content}></View>
    </View>
  );
};

export default MasterCardScreen;

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
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#fff",
    height: "80%",
    width: "100%",
    alignItems: "center",
  },
});
