import { PaperProvider } from "react-native-paper";
import Home from "./src/screens/Home";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="default" />
        <Home />
      </SafeAreaView>
    </PaperProvider>
  );
}
