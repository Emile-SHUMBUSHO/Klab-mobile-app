import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { UserInfo } from "../../utils/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProgram } from "../../redux/actions";
import { Programs } from "./programs";
import { Notification } from "../../components/notification";

const HomeScreen = (props) => {
  const [user, setUser] = useState("");
  const token = useSelector((state) => state.Auth.authToken);
  UserInfo(token).then((response) => {
    setUser(response.name);
  });
  const { programs } = useSelector((state) => state.program);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProgram());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
          {user}
        </Text>

        <Notification
          title="3"
          onPress={() => props.navigation.navigate("notifications")}
        />
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
        {programs?.map((program, index) => {
          return (
            <Programs
              key={program.id}
              id={program.id}
              title={program.title}
              descrption={program.description}
            />
          );
        })}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
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
  container: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
});
