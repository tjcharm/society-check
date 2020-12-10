import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

const AccountStack = createStackNavigator();

export default function Account() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Login" component={Login} />
      <AccountStack.Screen name="Create Account" component={CreateAccount} />
    </AccountStack.Navigator>
  );
}
