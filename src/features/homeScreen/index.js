import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { UserInfo } from "../../utils/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProgram } from "../../redux/actions";
import { Programs } from "./programs";
import { Notification } from "../../components/notification";
import { globalStyles } from "../../styles";

const HomeScreen = (props) => {
  const [userName, setUserName] = useState("");
  const token = useSelector((state) => state.Auth.authToken);
  UserInfo(token).then((response) => {
    setUserName(response.name);
    setUserEmail(response.email);
  });
  const { programs } = useSelector((state) => state.program);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProgram());
  }, []);
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.top}>
        <Text style={globalStyles.topText}>{userName}</Text>
        <Notification
          title="3"
          onPress={() => props.navigation.navigate("notifications")}
        />
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
            width: "100%",
            height: "85%",
            backgroundColor: "white",
            borderTopRightRadius: 40,
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
      </View>

      <StatusBar style="light" />
    </View>
  );
};

export default HomeScreen;
