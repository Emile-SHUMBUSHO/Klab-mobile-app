import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { UserInfo } from "../../utils/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/actions";
import { globalStyles } from "../../styles";
import { useNavigation } from "@react-navigation/native";

const GuestMenuScreen = (props) => {
  const navigation = useNavigation();
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
      <View
        style={[globalStyles.top, { height: "25%", justifyContent: "center" }]}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
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
            <Feather name="user-plus" size={24} color="black" />
            <Text style={{ left: 10 }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GuestMenuScreen;

const styles = StyleSheet.create({
  content: {
    borderTopRightRadius: 40,
    backgroundColor: "white",
    height: "750%",
    padding: 20,
  },
  touchableOpacity: {
    flexDirection: "row",
    margin: 10,
  },
  logo: {
    width: 100,
    height: 40,
  },
});
