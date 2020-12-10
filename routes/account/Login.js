import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, Input, Button } from "react-native-elements";
export default function Login({ navigation }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const loginUser = () => {
    alert(`Thanks for logging in ${username}!`);
  };

  return (
    <ScrollView>
      <Card>
        <Card.Title>Please Login</Card.Title>
        <Input
          placeholder="Username"
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <Input
          placeholder="Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Button title="Login" type="solid" onPress={loginUser} />
        <Button
          title="Create New Account"
          type="clear"
          onPress={() => {
            navigation.navigate("Create Account");
          }}
        />
      </Card>
    </ScrollView>
  );
}
