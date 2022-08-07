import React from "react";
import { TouchableOpacity, Text } from "react-native";
import COLORS from "../../../../infrastructure/theme/colors";
const Button = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: "50%",
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

export default Button;
