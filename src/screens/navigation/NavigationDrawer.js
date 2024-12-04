import React from "react";
import "react-native-gesture-handler";
import HomeScreen from "../HomeScreen";
import SettingScreen from "../SettingScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
