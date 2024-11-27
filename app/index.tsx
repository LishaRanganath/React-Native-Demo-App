import React from "react";
import { View, Text ,ScrollView } from "react-native";
import Home from "@/App-Components/Home";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", justifyContent: "center", alignItems: "center", padding:20 }}>
      <ScrollView>
        <Home/>
      </ScrollView>
    </View>
  );
}