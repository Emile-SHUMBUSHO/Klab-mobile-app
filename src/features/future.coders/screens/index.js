import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";

const ParentScreen = (props) => {
  const twoOptAlert = () => {
    Alert.alert("Summer Program", "Program fees: 50,000 RWF", [
      {
        text: "Yes",
        onPress: () => {
          props.navigation.navigate("register");
        },
      },
      {
        text: "No",
        onPress: () => {
          console.log("No pressed");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Register Child</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View style={styles.cardContent}>
          <ImageBackground
            source={require("../../../../assets/s3.jpg")}
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
              ></View>
            </View>
            <View>
              <Text style={{ margin: 10 }}>
                we enrich the future generation through tech innovations in our
                FutureCoders program of children aged 12 to 17. experience
                closer, the next is yours!The next cohort starts on 5th Jul2022.
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ margin: 10, left: 10 }}>Programs</Text>
        <Text style={{ margin: 10, left: 10 }}>
          Future Coders we have different programs for children according to
          their availability, Please select one of the following options.
        </Text>
        <View style={styles.programs}>
          <FlatGrid
            itemDimension={130}
            data={[1, 2, 3, 4]}
            // spacing={0}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={twoOptAlert}>
                <View style={styles.programCard}>
                  <Text style={{ color: "white" }}>Summer</Text>
                  <Text style={{ color: "white" }}>FRW 50,000</Text>
                  <Feather name="plus-circle" size={24} color="white" />
                  <Text style={{ fontSize: 10, color: "white" }}>
                    12-03-2022 to 23-05-2022
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ParentScreen;

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
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: "85%",
  },
  cardContent: {
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
  programs: {
    height: 300,
    width: "90%",
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
    borderRadius: 10,
  },
  programCard: {
    width: 150,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#3F3E3C",
  },
});
