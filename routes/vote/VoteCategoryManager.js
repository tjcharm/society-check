import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import VotingPollPreview from "./VotingPollPreview";
export default function VoteCategoryManager({ navigation, route }) {
  const pollType = route.params.pollType;
  const [pollCategory, setPollCategory] = useState(null);

  let displayedCategoryManager;
  if (pollCategory === null) {
    displayedCategoryManager = (
      <View>
        <Card>
          <Card.Title>
            What Category would you like to look at? {pollType}
          </Card.Title>
          <Button
            buttonStyle={{ margin: 5 }}
            title="Medical"
            type="solid"
            onPress={() => {}}
          />
          <Button
            buttonStyle={{ margin: 5 }}
            title="Society"
            type="solid"
            onPress={() => {}}
          />
        </Card>
      </View>
    );
  } else if (pollCategory === "singleQuestion") {
    displayedCategoryManager = (
      <Card>
        <Card.Title>
          single question poll. voting poll preview card title
        </Card.Title>
      </Card>
    );
  } else if (pollCategory === "multipleQuestion") {
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
          title="Ask for a vote"
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
