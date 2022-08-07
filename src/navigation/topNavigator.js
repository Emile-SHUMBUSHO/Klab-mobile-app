import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MasterCardScreen from "../features/payment/screens/masterCard";
import VisaCardScreen from "../features/payment/screens/visaCard";
const Tab = createMaterialTopTabNavigator();

function TopNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="MasterCard"
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarLabelStyle: { fontSize: 12, color: "#fff" },
        tabBarStyle: { backgroundColor: "green" },
        tabBarIndicatorStyle: {
          backgroundColor: "yellow",
          borderWidth: 0,
          width: 30,
          height: 4,
          left: 30,
        },
      }}
    >
      <Tab.Screen
        name="MasterCard"
        component={MasterCardScreen}
        options={{ tabBarLabel: "MasterCard" }}
      />
      <Tab.Screen
        name="VisaCard"
        component={VisaCardScreen}
        options={{ tabBarLabel: "VisaCard" }}
      />
    </Tab.Navigator>
  );
}

export default TopNavigator;
