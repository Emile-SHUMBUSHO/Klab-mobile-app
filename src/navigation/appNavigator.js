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
import { useState, useEffect, useContext } from "react";
import RegisterAnotherScreen from "../features/registerChild/screens/otherChild";
import EditProfileScreen from "../features/edit-profile/screens";
import Loader from "../components/loader";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { getToken } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState({});
  useEffect(() => {
    getToken("token").then((res) => {
      setIsLoggedIn(res);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
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
          </>
        ) : (
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
            <Stack.Screen name="recovery" component={ForgotPasswordScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
