import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { pollCategories } from "../../appConfig/PollCategories";
export default function VotingPollPreview({ navigation }) {
  const [pollType, setPollType] = useState(null);
  const [pollCategory, setPollCategory] = useState(null);

  const [
    pollCategoriesFromAppConfig,
    setpollCategoriesFromAppConfig,
  ] = useState(pollCategories);

  let displayedCats = [];

  if (
    pollCategoriesFromAppConfig != null &&
    pollCategoriesFromAppConfig !== undefined &&
    pollCategoriesFromAppConfig.length > 0
  ) {
    pollCategoriesFromAppConfig.map((cat) => {
      displayedCats.push(
        <Button
          key={cat}
          title={cat}
          type="solid"
          buttonStyle={{ margin: 10 }}
          onPress={() => {
            setPollCategory(cat);
          }}
        />
      );
    });
  } else {
    return (
      <View>
        <Text>nothing here yet</Text>
      </View>
    );
  }

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
  } else if (
    pollType != null &&
    pollType != undefined &&
    pollCategory == null
  ) {
    displayedCreateNewVotingPoll = (
      <ScrollView>
        <Card>
          <Card.Title>What category does your poll fall under?</Card.Title>
          {displayedCats}
        </Card>
      </ScrollView>
    );
  } else if (
    pollType != null &&
    pollType != undefined &&
    pollCategory != null &&
    pollCategory != undefined
  ) {
    displayedCreateNewVotingPoll = (
      <ScrollView>
        <Card>
          <Input placeholder="Main Question" />
        </Card>
      </ScrollView>
    );
  }

  return <View>{displayedCreateNewVotingPoll}</View>;
}
