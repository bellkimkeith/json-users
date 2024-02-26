import { SafeAreaView, StatusBar } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="default" />
      <Home />
    </SafeAreaView>
  );
}
