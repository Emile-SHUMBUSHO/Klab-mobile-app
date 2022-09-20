import React from "react";
import { TouchableOpacity, Text } from "react-native";
import COLORS from "../infrastructure/theme/colors";

export const Button1 = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: "40%",
        borderRadius: 20,
        backgroundColor: "black",
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 14 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const Button2 = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 100,
        height: 30,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 15,
      }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};
