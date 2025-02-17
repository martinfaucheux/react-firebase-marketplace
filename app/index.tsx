import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./Screen/LoginScreen";
import "../global.css"

export default function Index() {
  return (
    <View className="flex bg-white">
      <StatusBar style="auto" />
      <LoginScreen/> 
    </View>
  );
}


