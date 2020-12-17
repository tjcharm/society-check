import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import VotingPollPreview from "./VotingPollPreview";
import { API } from "../../appConfig/ReactStoreApi";
export default function VotingPollPreviewManager({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const { pollType, pollCategory } = route.params;
  const [pollsFromServer, setPollsFromServer] = useState(null);

  useEffect(() => {
    fetch(
      `${API}/votingPolls/pollsByTypeAndCategory/${pollType}/${pollCategory}`
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
          <Button
            title={poll.singleQuestionPollAnswerChoices}
            type="solid"
            onPress={() => {
              alert(
                `${poll.singleQuestionPollAnswerChoices} was selected, Thank you!`
              );
            }}
          />
        </Card>
      );
    });
  }

  return (
    <>
      <ScrollView>{displayedPollsFromServer}</ScrollView>
    </>
  );
}
