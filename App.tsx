import { StatusBar } from "expo-status-bar";
import { StyleSheet, ActivityIndicator } from "react-native";
import AppText from "./components/texts/AppText";
import AppSafeView from "./components/views/AppSafeView";
import AppButton from "./components/buttons/AppButton";
import AppTextInputts from "./components/inputs/AppTextInputts";
import SignInScreen from "./screens/auth/SignInScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import AuthStack from "./navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./navigation/MainAppStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./stores/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainAppStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
