import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Notification = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Ionicons name="notifications-outline" size={28} color="#FFFFFF" />
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "red",
          right: 10,
          top: -12,
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
