import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-elements";
export default function VotingPollPreview({ navigation }) {
  const [pollType, setPollType] = useState(null);

  let displayedCreateNewVotingPoll;
  if (pollType === null) {
    displayedCreateNewVotingPoll = (
      <View>
        <Card>
          <Card.Title>
            Would you like to ask one question or more than one?
          </Card.Title>
          <Button
            buttonStyle={{ margin: 5 }}
            title="One Question"
            type="solid"
            onPress={() => {
              setPollType("singleQuestion");
            }}
          />
          <Button
            buttonStyle={{ margin: 5 }}
            title="Multiple Questions"
            type="solid"
            onPress={() => {
              setPollType("multipleQuestion");
            }}
          />
        </Card>
      </View>
    );
  } else if (pollType === "singleQuestion") {
    displayedCreateNewVotingPoll = (
      <Card>
        <Card.Title>
          single question poll. voting poll preview card title
        </Card.Title>
      </Card>
    );
  } else if (pollType === "multipleQuestion") {
    displayedCreateNewVotingPoll = (
      <Card>
        <Card.Title>
          multiple question poll. voting poll preview card title
        </Card.Title>
      </Card>
    );
  }

  return <View>{displayedCreateNewVotingPoll}</View>;
}