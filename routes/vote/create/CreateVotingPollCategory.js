import { CURRENT_API } from "@env";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { pollCategories } from "../../../appConfig/PollCategories";
import { createNewVotingPoll } from "../../../api/VotingPollApi";

export default function CreateVotingPollCategory({ navigation, route }) {
  const pollType = route.params.pollType;
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
          buttonStyle={{ marginVertical: 15 }}
          onPress={() => {
            navigation.navigate("Create Voting Poll", {
              pollType: pollType,
              pollCategory: cat,
            });
          }}
        />
      );
    });
  }
  return (
    <>
      <ScrollView>
        <Card>
          <Card.Title style={{ fontSize: 25 }}>Categories</Card.Title>
          {displayedCats}
        </Card>
      </ScrollView>
    </>
  );
}
