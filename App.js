import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigation from "./src/navigation/rootNavigator";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
import { AuthProvider } from "./src/context/AuthContext";
export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
