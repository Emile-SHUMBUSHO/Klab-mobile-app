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
import RegisterAnotherScreen from "../features/registerChild/screens/otherChild";
import EditProfileScreen from "../features/edit-profile/screens";
import JoinScreen from "../features/joinProgram";
import KlabMembersHomeScreen from "../features/klab-members";
import TypeNewPasswordScreen from "../features/auth/reset-password";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";
import { Init } from "../redux/actions";
import { UserInfo } from "../utils/userInfo";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.Auth.authToken);
  UserInfo(token).then((response) => {
    setUser(response.id);
  });

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
            <Stack.Screen name="recovery" component={ForgotPasswordScreen} />
            <Stack.Screen
              name="codeVerification"
              component={CodeVerificationScreen}
            />
            <Stack.Screen
              name="newPassword"
              component={TypeNewPasswordScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="home" component={MainNavigator} />
            <Stack.Screen name="profile" component={CompleteProfileScreen} />
            <Stack.Screen name="payment" component={PaymentScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="edit" component={EditProfileScreen} />
            <Stack.Screen
              name="anotherChild"
              component={RegisterAnotherScreen}
            />
            <Stack.Screen name="join" component={JoinScreen} />
            <Stack.Screen name="notifications" component={Notifications} />
            <Stack.Screen name="members" component={KlabMembersHomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
