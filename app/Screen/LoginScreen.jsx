import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default LoginScreen = () => (
  <View className="p-8">
    <Text className="text-[30px] font-bold">Marketplace</Text>
    <Text className="text-[18px] text-slate-500 mt-6">
      An amazing market place!
    </Text>
    <View>
      <TouchableOpacity
        onPress={() => console.log("ouiiii")}
        className="p-4 mt-20 rounded-full bg-blue-500 text-white"
      >
        Get started
      </TouchableOpacity>
    </View>
  </View>
);
