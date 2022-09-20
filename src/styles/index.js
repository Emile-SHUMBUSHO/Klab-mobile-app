import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    height: "15%",
    padding: 0,
    borderBottomLeftRadius: 40,
  },

  topText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    margin: 20,
  },

  footer: {
    height: "85%",
  },
  content: {
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
  },
});
