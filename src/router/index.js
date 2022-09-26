import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, MarketListScreen } from "~/screens";

const Stack = createNativeStackNavigator();

export const Router = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="MarketList" component={MarketListScreen} />
  </Stack.Navigator>
);
