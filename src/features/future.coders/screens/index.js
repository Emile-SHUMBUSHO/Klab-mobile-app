import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import { ChildPogramComponent } from "../components/childProgramComponent";
import { useEffect } from "react";
import { fetchChildProgram } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { Notification } from "../../../components/notification";

const ParentScreen = (props) => {
  const { programs } = useSelector((state) => state.program);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChildProgram());
  }, []);
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
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
          Register Child
        </Text>
        <Notification
          title="15"
          onPress={() => props.navigation.navigate("notifications")}
        />
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
              <Text style={{ margin: 10, fontSize: 20, fontWeight: "bold" }}>
                Future Coders
              </Text>
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
        <Text
          style={{ margin: 10, left: 10, fontSize: 20, fontWeight: "bold" }}
        >
          Programs
        </Text>
        <Text style={{ margin: 10, left: 10 }}>
          Future Coders we have different programs for children according to
          their availability, Please select one of the following options.
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {programs?.map((program, index) => {
            return (
              <ChildPogramComponent
                key={program.id}
                id={program.id}
                date={program.programDate}
                endDate={program.programEndDate}
                time={program.duration}
                fees={program.cost}
                pId={program.fpro_id}
                pStatus={program.fstatus}
                title={program.title}
                descption={program.description}
                image={program.banner}
                navigation={() => {
                  props.navigation.navigate("register", program);
                }}
              />
            );
          })}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 10,
          }}
        >
          <Text>View More</Text>
          <MaterialIcons name="navigate-next" size={24} color="black" />
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
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
    borderRadius: 20,
    margin: 10,
  },
  programs: {
    height: 220,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
