import { CURRENT_API } from "@env";
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, Card } from "react-native-elements";
import VotingPollPreview from "./VotingPollPreview";
import { getVotingPollUsingTypeAndCategory } from "../../../api/VotingPollApi";
export default function VotingPollPreviewManager({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const { pollType, pollCategory } = route.params;
  const [pollsFromServer, setPollsFromServer] = useState(null);

  useEffect(() => {
    let getPollsFromApi = async () => {
      let pollsFromApi = await getVotingPollUsingTypeAndCategory(
        pollType,
        pollCategory
      );
      setPollsFromServer(pollsFromApi);
    };
    getPollsFromApi();
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
