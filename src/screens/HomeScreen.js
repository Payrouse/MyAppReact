import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;
  const goToSetting = () => {
    navigation.navigate("Setting");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>I am Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={goToSetting}>
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#87CEEB", // Fondo celeste
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "#fff", // Texto blanco
    fontSize: 16,
    fontWeight: "bold",
  },
});
