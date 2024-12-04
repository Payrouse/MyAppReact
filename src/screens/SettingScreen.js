import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function SettingScreen({ navigation }) {
  const goBackToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>

      <TouchableOpacity style={styles.button} onPress={goBackToHome}>
        <Text style={styles.text}>Go Back to Home</Text>
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
