import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import VotingPollPreview from "../consume/VotingPollPreview";
export default function VoteTypeManager({ navigation }) {
  const [pollType, setPollType] = useState(null);

  let displayedCategoryManager;
  if (pollType === null) {
    displayedCategoryManager = (
      <View>
        <Card>
          <Card.Title>
            Would you like look at single question, or multiple question polls?
          </Card.Title>
          <Button
            buttonStyle={{ margin: 5 }}
            title="Single Question Polls"
            type="solid"
            onPress={() => {
              navigation.navigate("Vote Category Manager", {
                pollType: "singleQuestion",
              });
            }}
          />
          <Button
            buttonStyle={{ margin: 5 }}
            title="Multiple Question Polls"
            type="solid"
            onPress={() => {
              navigation.navigate("Vote Category Manager", {
                pollType: "multipleQuestion",
              });
            }}
          />
        </Card>
      </View>
    );
  } else if (pollType === "singleQuestion") {
    displayedCategoryManager = (
      <Card>
        <Card.Title>
          single question poll. voting poll preview card title
        </Card.Title>
      </Card>
    );
  } else if (pollType === "multipleQuestion") {
    displayedCategoryManager = (
      <Card>
        <Card.Title>
          multiple question poll. voting poll preview card title
        </Card.Title>
      </Card>
    );
  }

  return (
    <>
      <View>
        <Button
          title="Create A Poll"
          type="outline"
          buttonStyle={{ margin: 10 }}
          onPress={() => {
            navigation.navigate("Create New Poll");
          }}
        />
      </View>
      <ScrollView>{displayedCategoryManager}</ScrollView>
    </>
  );
}
