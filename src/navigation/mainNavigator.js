import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import ProfileScreen from "../features/profileScreen";
import HomeScreen from "../features/homeScreen";
import ParentScreen from "../features/future.coders/screens";
import ChildScreen from "../features/ChildScreen";
import KlabMembersHomeScreen from "../features/klab-members";
import EventScreen from "../features/events";
import { useState } from "react";
import { UserInfo } from "../utils/userInfo";
import { useSelector } from "react-redux";
import { CompanyScreen } from "../features/company";

const Tab = createBottomTabNavigator();

function MainNavigator() {
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.Auth.authToken);
  UserInfo(token).then((response) => {
    setUser(response.id);
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
      {user === "parent" ? (
        <>
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
            name="Programs"
            options={{
              tabBarLabel: "Programs",
              tabBarIcon: ({ size, color, focused }) => (
                <Entypo
                  name="list"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
              ),
            }}
            component={ParentScreen}
          />

          <Tab.Screen
            name="Events"
            options={{
              tabBarLabel: "Events",
              tabBarIcon: ({ focused, size, color }) => (
                <MaterialIcons
                  name="event"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
              ),
            }}
            component={EventScreen}
          />

          <Tab.Screen
            name="Child"
            options={{
              tabBarLabel: "Child",
              tabBarIcon: ({ size, color, focused }) => (
                <FontAwesome
                  name="child"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
              ),
            }}
            component={ChildScreen}
          />
          <Tab.Screen
            name="Profile"
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size, focused }) => (
                <FontAwesome5
                  name="user-alt"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
              ),
            }}
            component={ProfileScreen}
          />
        </>
      ) : (
        <>
          {user === "company" ? (
            <>
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
                name="Register"
                options={{
                  tabBarLabel: "Register",
                  tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                      name="business"
                      size={24}
                      color={focused ? "black" : "grey"}
                    />
                  ),
                }}
                component={CompanyScreen}
              />
              <Tab.Screen
                name="Events"
                options={{
                  tabBarLabel: "Events",
                  tabBarIcon: ({ color, size, focused }) => (
                    <MaterialIcons
                      name="event"
                      size={24}
                      color={focused ? "black" : "grey"}
                    />
                  ),
                }}
                component={EventScreen}
              />
              <Tab.Screen
                name="Profile"
                options={{
                  tabBarLabel: "Company-Kit",
                  tabBarIcon: ({ color, size, focused }) => (
                    <FontAwesome5
                      name="business-time"
                      size={24}
                      color={focused ? "black" : "grey"}
                    />
                  ),
                }}
                component={ProfileScreen}
              />
            </>
          ) : (
            <>
              {user === "member" ? (
                <>
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
                    component={KlabMembersHomeScreen}
                  />
                  <Tab.Screen
                    name="Profile"
                    options={{
                      tabBarLabel: "Me",
                      tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome5
                          name="user-alt"
                          size={24}
                          color={focused ? "black" : "grey"}
                        />
                      ),
                    }}
                    component={ProfileScreen}
                  />
                </>
              ) : (
                <>
                  <Tab.Screen
                    name="Events"
                    options={{
                      tabBarLabel: "Events",
                      tabBarIcon: ({ focused, size, color }) => (
                        <MaterialIcons name="event" size={24} color="black" />
                      ),
                    }}
                    component={KlabMembersHomeScreen}
                  />
                  <Tab.Screen
                    name="settings"
                    options={{
                      tabBarLabel: "settings",
                      tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-alt" size={24} color="grey" />
                      ),
                    }}
                    component={ProfileScreen}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </Tab.Navigator>
  );
}

export default MainNavigator;
