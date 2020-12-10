import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import VoteCategoryManager from "./VoteCategoryManager";

const VoteStack = createStackNavigator();

export default function Account() {
  return (
    <VoteStack.Navigator>
      <VoteStack.Screen
        name="Vote Stack Manager"
        component={VoteCategoryManager}
      />
    </VoteStack.Navigator>
  );
}
