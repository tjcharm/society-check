import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, Input } from "react-native-elements";
export default function Login({ navigation }) {
  return (
    <ScrollView>
      <Card>
        <Card.Title>Please Login</Card.Title>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
      </Card>
    </ScrollView>
  );
}
