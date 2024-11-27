import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" keyboardType="email-address"></TextInput>
      <TextInput placeholder="Password"></TextInput>
      <Button title="Enviar" onPress={() => console.log("Enviado")}></Button>
    </View>
  );
}
