import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DiscussCategoryManager from "./DiscussCategoryManager";

const DiscussStack = createStackNavigator();

export default function Account() {
  return (
    <DiscussStack.Navigator>
      <DiscussStack.Screen
        name="Discuss Category Manager"
        component={DiscussCategoryManager}
      />
    </DiscussStack.Navigator>
  );
}
