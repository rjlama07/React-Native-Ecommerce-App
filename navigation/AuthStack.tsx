import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import { AppRoutes } from "../constants/App-Routes";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppRoutes.SignIn} component={SignInScreen} />
      <Stack.Screen name={AppRoutes.SignUp} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
