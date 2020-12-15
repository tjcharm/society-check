import React from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-elements";
export default function VotingPollPreview({ navigation }) {
  let displayedVotingPollPreview;

  let pollType = "singleQuestion";

  if (pollType === "singleQuestion") {
    displayedVotingPollPreview = (
      <Card>
        <Card.Title>
          multiple question poll. voting poll preview card title
        </Card.Title>
      </Card>
    );
  } else if (pollType === "multipleQuestion") {
    displayedVotingPollPreview = (
      <Card>
        <Card.Title>
          single question poll. voting poll preview card title
        </Card.Title>
      </Card>
    );
  }

  return <View>{displayedVotingPollPreview}</View>;
}
