import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import VotingPollPreview from "./VotingPollPreview";
export default function VoteCategoryManager({ navigation }) {
  return (
    <>
      <View>
        <Button
          title="Ask for a vote"
          type="solid"
          buttonStyle={{ margin: 10 }}
        />
      </View>
      <ScrollView>
        <VotingPollPreview />
      </ScrollView>
    </>
  );
}
