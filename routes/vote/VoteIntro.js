import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import VotingPollPreview from "./consume/VotingPollPreview";
export default function VoteIntro({ navigation }) {
  return (
    <ScrollView>
      <Card
        containerStyle={{
          borderRadius: 10,
          height: "100%",
          backgroundColor: "#333",
        }}
      >
        <Card.Title style={{ color: "white" }}>
          Would you like to answer some poll questions or create some of your
          own?
        </Card.Title>
        <Button
          title="Create A Poll"
          type="outline"
          buttonStyle={{ margin: 10 }}
          onPress={() => {
            navigation.navigate("Select Create Voting Poll Type");
          }}
        />
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
    </ScrollView>
  );
}
