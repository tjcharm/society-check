import { CURRENT_API } from "@env";
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, Card } from "react-native-elements";
import VotingPollPreview from "./VotingPollPreview";

export default function VotingPollPreviewManager({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const { pollType, pollCategory } = route.params;
  const [pollsFromServer, setPollsFromServer] = useState(null);

  useEffect(() => {
    fetch(
      `${CURRENT_API}/votingPolls/pollsByTypeAndCategory/${pollType}/${pollCategory}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // sets the data from database to inventory items
        setPollsFromServer(data);
      });
  }, []);

  let displayedPollsFromServer = [];

  if (
    pollsFromServer != null &&
    pollsFromServer.length >= 1 &&
    pollsFromServer != undefined
  ) {
    pollsFromServer.map((poll) => {
      displayedPollsFromServer.push(
        <TouchableOpacity
          key={poll.pollTitle}
          onPress={() => {
            navigation.navigate("Voting Poll Preview", {
              poll: poll,
              pollType: pollType,
            });
          }}
        >
          <Card>
            <Card.Title>{poll.pollTitle}</Card.Title>
            <Card.FeaturedSubtitle
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
              {poll.singleQuestionPollQuestion}
            </Card.FeaturedSubtitle>
          </Card>
        </TouchableOpacity>
      );
    });
  }

  return (
    <>
      <ScrollView>{displayedPollsFromServer}</ScrollView>
    </>
  );
}
