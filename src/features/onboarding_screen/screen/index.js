import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const OnboardingScreen = (props) => {
  const [showSlide, setShowSlide] = useState(false);
  const onDone = () => {};
  const renderNextButton = () => {
    return (
      <TouchableOpacity
        style={styles.buttonCircle}
        onPress={() => {
          props.navigation.navigate("signUp");
        }}
      >
        <AntDesign name="play" size={24} color="black" />
      </TouchableOpacity>
    );
  };
  const RenderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          borderBottomLeftRadius={90}
        >
          <View style={styles.banner}></View>
        </ImageBackground>
        <LinearGradient
          colors={["white", "lightgrey", "grey"]}
          style={styles.content}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.IntroTitle}>{item.introTitle}</Text>

          {/* <View style={styles.btnColntrollers}>
            <TouchableOpacity
              
            ></TouchableOpacity>
          </View> */}
        </LinearGradient>
      </View>
    );
  };
  return (
    <>
      {showSlide ? (
        <View>
          <Text>No App into slide</Text>
        </View>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          renderNextButton={renderNextButton}
          showSkipButton={renderNextButton}
          nextLabel={true}
          showDoneButton={false}
          dotStyle={{
            backgroundColor: "black",
            shadowRadius: 2,
          }}
          activeDotStyle={{
            width: 20,
            backgroundColor: "black",
          }}
        />
      )}
    </>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
  banner: {
    height: "50%",
    borderBottomLeftRadius: 90,
    justifyContent: "flex-end",
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    height: "50%",
    backgroundColor: "lightgrey",
  },
  title: {
    padding: 25,
    margin: 10,
  },

  IntroTitle: {
    padding: 10,
    textAlign: "center",
  },
  btnColntrollers: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    top: 95,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    key: 0,
    title: "Klab Events",
    introTitle: `hosting an info session to present to the entrepreneurs about alibaba's ecosystem and training programs that they have in place. The participants can be tech entrepreneurs. they are not only focusing on ecommerce`,
    image: require("../../../../assets/s1.jpg"),
  },
  {
    key: 0,
    title: "Klab Start Up Academy",
    introTitle: `hosting an info session to present to the entrepreneurs about alibaba's ecosystem and training programs that they have in place. The participants can be tech entrepreneurs. they are not only focusing on ecommerce`,
    image: require("../../../../assets/s2.jpg"),
  },
  {
    key: 0,
    title: "Future Coders",
    introTitle: `hosting an info session to present to the entrepreneurs about alibaba's ecosystem and training programs that they have in place. The participants can be tech entrepreneurs. they are not only focusing on ecommerce`,
    image: require("../../../../assets/s3.jpg"),
  },
  {
    key: 0,
    title: "Tech Up skill",
    introTitle: `hosting an info session to present to the entrepreneurs about alibaba's ecosystem and training programs that they have in place. The participants can be tech entrepreneurs. they are not only focusing on ecommerce`,
    image: require("../../../../assets/s4.jpg"),
  },
];
