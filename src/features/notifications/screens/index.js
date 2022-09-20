import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { globalStyles } from "../../../styles";

const Notifications = (props) => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.top}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("home");
          }}
          style={{ margin: 20 }}
        >
          <Entypo name="chevron-left" size={24} color="white" left={20} />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18, right: 150 }}>
          Notifications
        </Text>
      </View>
      <View style={globalStyles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "black",
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            height: "85%",
            width: "100%",
            backgroundColor: "white",
            borderTopRightRadius: 20,
          }}
        >
          <View style={styles.content}>
            <View style={styles.notification_card}>
              <Image
                source={require("../../../../assets/man.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Lisa Belliu
                </Text>
                <Text style={{ fontSize: 14 }}>Assignment...</Text>
              </View>
              <View
                style={{
                  paddingLeft: 70,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>12:00</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>

            <View style={styles.notification_card}>
              <Image
                source={require("../../../../assets/man.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Lisa Belliu
                </Text>
                <Text style={{ fontSize: 14 }}>Assignment...</Text>
              </View>
              <View
                style={{
                  paddingLeft: 70,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>12:00</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>

            <View style={styles.notification_card}>
              <Image
                source={require("../../../../assets/man.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Lisa Belliu
                </Text>
                <Text style={{ fontSize: 14 }}>Assignment...</Text>
              </View>
              <View
                style={{
                  paddingLeft: 70,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>12:00</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>

            <View style={styles.notification_card}>
              <Image
                source={require("../../../../assets/man.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Lisa Belliu
                </Text>
                <Text style={{ fontSize: 14 }}>Assignment...</Text>
              </View>
              <View
                style={{
                  paddingLeft: 70,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>12:00</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>

            <View style={styles.notification_card}>
              <Image
                source={require("../../../../assets/man.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Lisa Belliu
                </Text>
                <Text style={{ fontSize: 14 }}>Assignment...</Text>
              </View>
              <View
                style={{
                  paddingLeft: 70,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>12:00</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>

            <View style={styles.notification_card}>
              <Image
                source={require("../../../../assets/man.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Lisa Belliu
                </Text>
                <Text style={{ fontSize: 14 }}>Assignment...</Text>
              </View>
              <View
                style={{
                  paddingLeft: 70,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>12:00</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>

            <View style={styles.notification_card}>
              <Image
                source={require("../../../../assets/man.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Lisa Belliu
                </Text>
                <Text style={{ fontSize: 14 }}>Assignment...</Text>
              </View>
              <View
                style={{
                  paddingLeft: 70,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>12:00</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>

            <View style={styles.notification_card}>
              <Image
                source={require("../../../../assets/man.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Lisa Belliu
                </Text>
                <Text style={{ fontSize: 14 }}>Assignment...</Text>
              </View>
              <View
                style={{
                  paddingLeft: 70,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>12:00</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },

  top: {
    height: "15%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  notification_card: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
    width: "90%",
    height: 70,
    padding: 10,
    margin: 5,
  },
});
