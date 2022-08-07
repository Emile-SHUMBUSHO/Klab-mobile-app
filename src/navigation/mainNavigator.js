import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";
import ProfileScreen from "../components/profileScreen";
import HomeScreen from "../components/homeScreen";
import ParentScreen from "../features/future.coders/screens";
import ChildScreen from "../components/ChildScreen";
const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        },
        tabBarActiveTintColor: "black",
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome
              name="home"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Parent"
        options={{
          tabBarLabel: "Programs",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="list" size={24} color="grey" />
          ),
        }}
        component={ParentScreen}
      />

      <Tab.Screen
        name="Child"
        options={{
          tabBarLabel: "Child",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="child" size={24} color="grey" />
          ),
        }}
        component={ChildScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Me",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={24} color="grey" />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
