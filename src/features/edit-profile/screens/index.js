import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import Input from "../../../components/input";

const EditProfileScreen = (props) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={{ right: 100 }}
          onPress={() => {
            props.navigation.navigate("home");
          }}
        >
          <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18 }}>Edit Profile</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <View style={styles.content}>
          {/* Profile card info.. */}
          <View style={styles.profile_card}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 70, height: 70, borderRadius: 50 }}
              />
            )}

            <TouchableOpacity
              onPress={pickImage}
              style={{
                top: -50,
              }}
            >
              <Feather name="camera" size={24} color="black" />
            </TouchableOpacity>

            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Lissa Magrette
            </Text>
          </View>

          <Input
            style={styles.input}
            label="Telphone"
            placeholder="Change phone number"
          />

          <Input
            style={styles.input}
            label="Address"
            placeholder="Email address"
          />

          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => {
              props.navigation.navigate("home");
            }}
          >
            <Text style={{ color: "#FFFF" }}>Save Information</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

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
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    height: "85%",
    width: "100%",
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
  },

  profile_card: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "90%",
    height: 150,
    margin: 15,
  },

  input: {
    width: "85%",
  },

  submitBtn: {
    width: "40%",
    backgroundColor: "black",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
