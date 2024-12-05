import React from "react";
import { SafeAreaView, Text ,ScrollView, Platform , StyleSheet } from "react-native";
import Home from "@/App-Components/Home";
import Pokemon from "@/App-Components/Pokemon";
export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <Pokemon/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: "#f5f5f5",

  }
})