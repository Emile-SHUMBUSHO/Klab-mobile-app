import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
const Loader = ({ visible = false }) => {
  const { height, width } = useWindowDimensions();
  return (
    visible && (
      <View style={[styles.loaderContainer, { height, width }]}>
        <View style={[styles.loader]}>
          <ActivityIndicator size="large" color="black" />
        </View>
      </View>
    )
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },

  loader: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingHorizontal: 20,
  },
});
