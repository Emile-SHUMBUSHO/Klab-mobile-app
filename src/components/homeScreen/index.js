import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { UserInfo } from "../../utils/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProgram } from "../../redux/actions";
import { Programs } from "./programs";

const HomeScreen = (props) => {
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.Auth.authToken);
  UserInfo(token).then((response) => {
    setUser(response.email);
  });
  const { programs } = useSelector((state) => state.program);
  console.log("all programs here");
  console.log(programs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProgram());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            margin: 25,
            top: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/man.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ padding: 10, color: "#fff" }}>Eric Malaba</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("notifications");
            }}
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
                9
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "85%",
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              maxWidth: 200,
              textAlign: "center",
              margin: 10,
            }}
          >
            kLab| Open Innovation Space | Tech |Creativity.
          </Text>
        </View>
        <Programs />
        <View style={styles.content}>
          <ImageBackground
            source={require("../../../assets/s1.jpg")}
            borderTopRightRadius={20}
            borderTopLeftRadius={20}
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
              <Text style={{ margin: 10 }}>Klab Events</Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <TouchableOpacity style={{ right: 10 }}>
                  <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 25,
                    backgroundColor: "black",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    borderRadius: 25,
                  }}
                >
                  <Text style={{ color: "white" }}>Join</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{ margin: 10 }}>
                kLab Rwanda is hosting an info session to present to the
                entrepreneurs about alibaba's ecosystem and training programs
                that they have in place. The participants can be tech
                entrepreneurs. they are not only focusing on ecommerce...
                <TouchableOpacity>
                  <Text>Read More</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <ImageBackground
            source={require("../../../assets/s3.jpg")}
            borderTopRightRadius={20}
            borderTopLeftRadius={20}
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
              <Text style={{ margin: 10 }}>Future Coders</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <TouchableOpacity style={{ right: 10 }}>
                  <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("join");
                  }}
                  style={{
                    width: 50,
                    height: 25,
                    backgroundColor: "black",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    borderRadius: 25,
                  }}
                >
                  <Text style={{ color: "white" }}>Join</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{ margin: 10 }}>
                kLab Rwanda is hosting an info session to present to the
                entrepreneurs about alibaba's ecosystem and training programs
                that they have in place. The participants can be tech
                entrepreneurs. they are not only focusing on ecommerce...
                <TouchableOpacity>
                  <Text>Read More</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <ImageBackground
            source={require("../../../assets/s4.jpg")}
            borderTopRightRadius={20}
            borderTopLeftRadius={20}
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
              <Text style={{ margin: 10 }}>Tech Up Skill</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <TouchableOpacity style={{ right: 10 }}>
                  <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 25,
                    backgroundColor: "black",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    borderRadius: 25,
                  }}
                >
                  <Text style={{ color: "white" }}>Join</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{ margin: 10 }}>
                kLab Rwanda is hosting an info session to present to the
                entrepreneurs about alibaba's ecosystem and training programs
                that they have in place. The participants can be tech
                entrepreneurs. they are not only focusing on ecommerce...
                <TouchableOpacity>
                  <Text>Read More</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  top: {
    height: "15%",
    width: "100%",
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    margin: 20,
  },
  container: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
});
