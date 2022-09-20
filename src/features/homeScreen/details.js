import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const Details = () => {
  return (
    <View>
      <AntDesign
        name="close"
        size={24}
        color="black"
        style={{
          padding: 12,
          position: "absolute",
          right: 0,
          zIndex: 2,
        }}
      />
    </View>
  );
};
