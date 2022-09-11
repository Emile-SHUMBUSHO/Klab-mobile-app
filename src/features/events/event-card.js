import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button2 } from "../../components/button";

export const EventCard = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <ImageBackground
        source={require("../../../assets/pevent1.jpg")}
        borderRadius={10}
      >
        <View style={{ height: 200 }} />
      </ImageBackground>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ margin: 10, fontSize: 18, fontWeight: "bold" }}>
            Meet with MTN CEO
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Button2 onPress={navigation} title="Book a seat" />
          </View>
        </View>
        <View>
          <Text style={{ margin: 10 }}>
            Last Evening @klabrw hosted our #StartupsDemoNight and various
            #techpreneurs showcased their solutions, & discussed how they can
            broaden and sustain their opportunities within the #local and
            #global
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 10,
    margin: 20,
  },
});
