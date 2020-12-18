import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackManager from "./routes/home/HomeStackManager";
import AccountStackManager from "./routes/account/AccountStackManager";
import VoteStackManager from "./routes/vote/VoteStackManager";
import DiscussStackManager from "./routes/discuss/DiscussStackManager";
const AppTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppTab.Navigator initialRouteName="Vote">
        <AppTab.Screen name="Home" component={HomeStackManager} />
        <AppTab.Screen name="Vote" component={VoteStackManager} />
        <AppTab.Screen name="Discuss" component={DiscussStackManager} />
        <AppTab.Screen name="Account" component={AccountStackManager} />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
