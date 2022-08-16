import OnboardingScreen from "../features/onboarding_screen/screen";
import SignUpScreen from "../features/auth/sign-up";
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
import { useState, useEffect, useContext } from "react";
import RegisterAnotherScreen from "../features/registerChild/screens/otherChild";
import EditProfileScreen from "../features/edit-profile/screens";
import JoinScreen from "../features/joinProgram";

import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";
import { Init } from "../redux/actions";

import jwt_decode from "jwt-decode";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  var tokenn =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8va2xhYmF0dGVuZGVlcy5oZXJva3VhcHAuY29tL2FwaS9sb2dpbi9Mb2dpbkluZm8iLCJpYXQiOjE2NjA2MzgyNjEsImV4cCI6MTY2MDY0MTg2MSwibmJmIjoxNjYwNjM4MjYxLCJqdGkiOiJwVWlLbjh6dGF3U3BueXppIiwic3ViIjoiOSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJpZCI6Im1lbWJlciIsImVtYWlsIjoibnR3YXJpQGdtYWlsLmNvbSJ9.9JVUV0CStFy2ItV8Xoy1v7umximAfUkZo7R1Vt1VjiI";
  var decoded = jwt_decode(tokenn);
  console.log("decoded data");
  console.log(decoded);

  const token = useSelector((state) => state.Auth.authToken);
  console.log(token);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color={"red"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token === null ? (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="signUp" component={SignUpScreen} />
            <Stack.Screen name="policy" component={PrivacyPolicyScreen} />
            <Stack.Screen name="terms" component={TermsAndConditionsScreen} />
            <Stack.Screen name="signIn" component={SignInScreen} />
            <Stack.Screen
              name="codeVerification"
              component={CodeVerificationScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="home" component={MainNavigator} />
            <Stack.Screen name="notifications" component={Notifications} />
            <Stack.Screen name="profile" component={CompleteProfileScreen} />
            <Stack.Screen name="payment" component={PaymentScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="edit" component={EditProfileScreen} />
            <Stack.Screen
              name="anotherChild"
              component={RegisterAnotherScreen}
            />
            <Stack.Screen name="join" component={JoinScreen} />
            <Stack.Screen name="recovery" component={ForgotPasswordScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
