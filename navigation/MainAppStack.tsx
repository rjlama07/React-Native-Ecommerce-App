import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutScreen from "../screens/checkout/CheckoutScreen";
import MyOrders from "../screens/MyOrders/MyOrders";

const Stack = createStackNavigator();

export default function MainAppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MainAppBottomTabs"
        component={MainAppBottomTabs}
      ></Stack.Screen>
      <Stack.Screen name="Checkout" component={CheckoutScreen}></Stack.Screen>
      <Stack.Screen name="MyOrder" component={MyOrders}></Stack.Screen>
    </Stack.Navigator>
  );
}
