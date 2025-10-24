import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./components/texts/AppText";
import AppSafeView from "./components/views/AppSafeView";
import AppButton from "./components/buttons/AppButton";
import AppTextInputts from "./components/inputs/AppTextInputts";
import SignInScreen from "./screens/auth/SignInScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";

export default function App() {
  return (
    <AppSafeView style={styles.container}>
      <SignUpScreen />
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
