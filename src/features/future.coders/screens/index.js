import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ChildPogramComponent } from "../components/childProgramComponent";
import { useEffect } from "react";
import { fetchChildProgram } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ParentScreen = (props) => {
  const { programs } = useSelector((state) => state.Program);
  console.log("programs are here");
  console.log(programs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChildProgram());
    console.log(programs);
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
        <View style={styles.programs}>
          {/* <TouchableOpacity onPress={twoOptAlert}>
            <View style={styles.programCard}>
              <Text style={{ color: "white" }}>Vacatinal Program</Text>
              <Text style={{ color: "white" }}>FRW: 50,000</Text>
              <Feather
                name="plus-circle"
                size={34}
                color="white"
                style={{ margin: 10 }}
              />
              <Text style={{ fontSize: 10, color: "white" }}>
                12-03-2022 to 23-05-2022
              </Text>
            </View>
          </TouchableOpacity> */}
          {/* {programs?.map((program, index) => {
            console.log("programs to be attended");
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
                // navigation={() => {
                //   props.navigation.navigate("DetailScreen", movies);
                // }}
              />
            );
          })} */}
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  programCard: {
    width: 250,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#3F3E3C",
  },
});
