import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card, Input } from "react-native-elements";

export default function CreateAccount({ navigation }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [verifyPassword, setVerifyPassword] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const createAccount = () => {
    alert(`Thanks for creating a account ${username}!`);
  };

  return (
    <ScrollView>
      <Card>
        <Card.Title>Please create a account</Card.Title>
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
        <Input
          placeholder="Verify Password"
          onChangeText={(text) => {
            setVerifyPassword(text);
          }}
        />
        <Input
          placeholder="Email Address"
          onChangeText={(text) => {
            setEmailAddress(text);
          }}
        />
        <Input
          placeholder="Phone Number"
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
        />
        <Button title="Create Account" type="solid" onPress={createAccount} />
      </Card>
    </ScrollView>
  );
}
