import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import NavigationStack from "./src/screens/navigation/NavigationStack";
import NavigationTab from "./src/screens/navigation/NavigationTab";
import NavigationDrawer from "./src/screens/navigation/NavigationDrawer";
export default function App() {
  return (
    <NavigationContainer>
      {/*  <NavigationStack/>
      <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}
