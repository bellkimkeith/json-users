import { PaperProvider, useTheme } from "react-native-paper";
import Home from "./src/screens/Home";
import UserDetails from "./src/screens/UserDetails";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  const theme = useTheme();

  return (
    <>
      <StatusBar barStyle="default" />
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "Users Overview",
                headerTintColor: theme.colors.primary,
              }}
            />
            <Stack.Screen
              name="UserDetails"
              component={UserDetails}
              options={{
                title: "Users Details",
                headerBackTitleVisible: false,
                headerTintColor: theme.colors.primary,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
