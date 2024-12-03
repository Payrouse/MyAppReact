import React from "react";
import { Text } from "react-native";
export default function Saludar(props) {
  const { firstName, lastName } = props;
  return (
    <Text>
      Hola {firstName} {lastName}
    </Text>
  );
}
