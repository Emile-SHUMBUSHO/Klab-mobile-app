import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { useState, useEffect } from "react";

const ProfileScreen = (props) => {
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };
  const logout = () => {
    AsyncStorage.setItem(
      "user",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    props.navigation.navigate("signIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ color: "white", fontSize: 18 }}>Stacy Karuama</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Feather name="edit" size={24} color="black" />
          <Text style={{ left: 10 }}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableOpacity}>
          <MaterialIcons name="live-tv" size={24} color="black" />
          <Text style={{ left: 10 }}>Tutorial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableOpacity}>
          <Feather name="star" size={24} color="black" />
          <Text style={{ left: 10 }}>Rate Us</Text>
        </TouchableOpacity>

        <View
          style={{
            width: "90%",
            height: 1,
            backgroundColor: "black",
            margin: 10,
          }}
        />

        <TouchableOpacity style={styles.touchableOpacity}>
          <FontAwesome5 name="question-circle" size={24} color="black" />
          <Text style={{ left: 10 }}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableOpacity}>
          <Feather name="share-2" size={24} color="black" />
          <Text style={{ left: 10 }}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableOpacity}>
          <Feather name="unlock" size={24} color="black" />
          <Text style={{ left: 10 }}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={logout}>
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={{ left: 10 }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  top: {
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    height: "85%",
    padding: 20,
  },
  touchableOpacity: {
    flexDirection: "row",
    margin: 10,
  },
});
