import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Feather,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { Notification } from "../../components/notification";
import { UserInfo } from "../../utils/userInfo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/actions";
import { globalStyles } from "../../styles";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = (props) => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const token = useSelector((state) => state.Auth.authToken);
  UserInfo(token).then((response) => {
    setUser(response.name);
  });
  const dispatch = useDispatch();
  const logoutFunc = () => {
    dispatch(Logout());
  };
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.top}>
        <Text style={[globalStyles.topText, { left: 10 }]}>{user}</Text>
        <Notification
          title="5"
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
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("profile");
            }}
            style={styles.touchableOpacity}
          >
            <AntDesign name="profile" size={24} color="black" />
            <Text style={{ left: 10 }}>Complete Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("edit");
            }}
            style={styles.touchableOpacity}
          >
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
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={logoutFunc}
          >
            <MaterialIcons name="logout" size={24} color="black" />
            <Text style={{ left: 10 }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  content: {
    borderTopRightRadius: 40,
    backgroundColor: "white",
    height: "100%",
    padding: 20,
  },
  touchableOpacity: {
    flexDirection: "row",
    margin: 10,
  },
});
