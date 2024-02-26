import { PaperProvider, useTheme } from "react-native-paper";
import Home from "./src/screens/Home";
import UserDetails from "./src/screens/UserDetails";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserPosts from "./src/screens/UserPosts";

export default function App() {
  const Stack = createNativeStackNavigator();
  const theme = useTheme();

  return (
    <>
      <StatusBar barStyle="default" />
      <PaperProvider>
        <NavigationContainer theme={theme}>
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
            <Stack.Screen
              name="UserPosts"
              component={UserPosts}
              options={{
                title: "Users Posts",
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
