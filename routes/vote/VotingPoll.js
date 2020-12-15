import React from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-elements";
export default function VotingPoll({ navigation }) {
  let displayedVotingPoll = (
    <Card>
      <Card.Title>voting poll card title</Card.Title>
    </Card>
  );

  return { displayedVotingPoll };
}
