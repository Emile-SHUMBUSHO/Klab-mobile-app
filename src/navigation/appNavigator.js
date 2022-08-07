import OnboardingScreen from "../features/onboarding_screen/screen";
import SignUpScreen from "../features/auth/sign-up/screen";
import SignInScreen from "../features/auth/sign-in";
import MainNavigator from "./mainNavigator";
import CodeVerificationScreen from "../features/auth/code-verification";
import ForgotPasswordScreen from "../features/auth/forgot-password";
import Notifications from "../features/notifications/screens";
import RegisterScreen from "../features/registerChild/screens";
import CompleteProfileScreen from "../features/complete-profile/screens";
import PrivacyPolicyScreen from "../features/terms&conditions/screens/privacyPolicy";
import TermsAndConditionsScreen from "../features/terms&conditions/screens/terms&conditions";
import PaymentScreen from "../features/payment/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { useState, useEffect } from "react";
import Loader from "../components/loader";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const [initialRouteName, setInitialRouteName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName("home");
        } else {
          setInitialRouteName("signIn");
        }
      } else {
        setInitialRouteName("signUp");
      }
    } catch (error) {
      setInitialRouteName("signUp");
    }
  };
  return (
    <NavigationContainer>
      {!initialRouteName ? (
        <Loader visible={true} />
      ) : (
        <>
          <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="signUp" component={SignUpScreen} />
            <Stack.Screen name="policy" component={PrivacyPolicyScreen} />
            <Stack.Screen name="terms" component={TermsAndConditionsScreen} />
            <Stack.Screen name="signIn" component={SignInScreen} />
            <Stack.Screen name="profile" component={CompleteProfileScreen} />
            <Stack.Screen name="home" component={MainNavigator} />
            <Stack.Screen name="payment" component={PaymentScreen} />
            <Stack.Screen name="notifications" component={Notifications} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen
              name="codeVerification"
              component={CodeVerificationScreen}
            />
            <Stack.Screen name="recovery" component={ForgotPasswordScreen} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;
