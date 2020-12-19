import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import VotingPollPreview from "./VotingPollPreview";
import { pollCategories } from "../../../appConfig/PollCategories";
export default function VoteCategoryManager({ navigation, route }) {
  const [
    pollCategoriesFromAppConfig,
    setpollCategoriesFromAppConfig,
  ] = useState(pollCategories);

  let displayedCats = [];

  const pollType = route.params.pollType;

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
          type="outline"
          buttonStyle={{ margin: 10 }}
          onPress={() => {
            navigation.navigate("VPPreviewManager", {
              pollType: pollType,
              pollCategory: cat,
            });
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
        <Card>
          <Card.Title>Categories</Card.Title>
          {displayedCats}
        </Card>
      </ScrollView>
    </>
  );
}
