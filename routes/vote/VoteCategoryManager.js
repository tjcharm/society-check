import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import VotingPollPreview from "./VotingPollPreview";
import { pollCategories } from "../../appConfig/PollCategories";
export default function VoteCategoryManager({ navigation, route }) {
  const [
    pollCategoriesFromAppConfig,
    setpollCategoriesFromAppConfig,
  ] = useState(pollCategories);

  let displayedCats = [];

  useEffect(() => {
    pollCategoriesFromAppConfig.map((cat) => {
      displayedCats.push(
        <Button
          title="category here"
          type="outline"
          buttonStyle={{ margin: 10 }}
          onPress={() => {
            navigation.navigate("Create New Poll");
          }}
        />
      );
    });
  }, []);

  const pollType = route.params.pollType;

  if (
    pollCategoriesFromAppConfig != null &&
    pollCategoriesFromAppConfig !== undefined &&
    pollCategoriesFromAppConfig.length > 0
  ) {
    pollCategoriesFromAppConfig.map((cat) => {
      displayedCats.push(
        <Button
          title={cat}
          type="outline"
          buttonStyle={{ margin: 10 }}
          onPress={() => {
            navigation.navigate("Create New Poll");
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
  return (
    <>
      <ScrollView>
        <Button
          title="Ask for a vote"
          type="outline"
          buttonStyle={{ margin: 10 }}
          onPress={() => {
            navigation.navigate("Create New Poll");
          }}
        />
        <Card>
          <Card.Title>Categories</Card.Title>
          {displayedCats}
        </Card>
      </ScrollView>
    </>
  );
}
