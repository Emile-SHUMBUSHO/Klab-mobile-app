import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, bookEvent } from "../../redux/actions";
import { EventCard } from "./event-card";
import { globalStyles } from "../../styles";

const GuestUserEventScreen = (props) => {
  const { events } = useSelector((state) => state.event);
  const dispatchEvent = useDispatch();
  useEffect(() => {
    dispatchEvent(fetchEvents());
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.top, { justifyContent: "center" }]}>
        <Text style={globalStyles.topText}>Klab Events</Text>
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
            borderTopRightRadius: 20,
          }}
        >
          <View>
            <Text style={styles.text}>Upcomming Event</Text>
          </View>
          {events?.map((event, index) => {
            return (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
              />
            );
          })}
          <View>
            <Text style={styles.text}>Recent Events</Text>
          </View>
          <View style={styles.content}>
            <ImageBackground
              source={require("../../../assets/pevent2.jpg")}
              borderRadius={10}
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
                <Text style={{ margin: 10, fontSize: 18, fontWeight: "bold" }}>
                  Meet with MTN CEO
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
                  Last Evening @klabrw hosted our #StartupsDemoNight and various
                  #techpreneurs showcased their solutions, & discussed how they
                  can broaden and sustain their opportunities within the #local
                  and #global
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <StatusBar style="light" />
    </View>
  );
};

export default GuestUserEventScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  top: {
    height: "15%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    borderRadius: 10,
    margin: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 20,
  },
});
