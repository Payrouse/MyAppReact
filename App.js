import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
import Saludar from "./src/components/Saludar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso de React Native</Text>

      <StatusBar style="dark" />
      <Saludar />
      <Saludar firstName="Carlos" lastName="Varela" />
      <Saludar firstName="Ana" lastName="Zambrano" />
      <Saludar firstName="Carlos" lastName="Ulloa" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
