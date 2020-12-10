import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, Input, Button } from "react-native-elements";
export default function Login({ navigation }) {
  return (
    <ScrollView>
      <Card>
        <Card.Title>Please Login</Card.Title>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button
          title="Create New Account"
          type="solid"
          onPress={() => {
            navigation.navigate("Create Account");
          }}
        />
      </Card>
    </ScrollView>
  );
}
