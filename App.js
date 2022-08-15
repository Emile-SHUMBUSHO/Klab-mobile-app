import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigation from "./src/navigation/rootNavigator";
import { AuthProvider } from "./src/context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaProvider>
  );
}
