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
        <ScrollView>
          <Card>
            <Card.Title>poll 1</Card.Title>
          </Card>
        </ScrollView>
      );
    });
  }

  return (
    <>
      <ScrollView>
        <Text>polls need to be created{displayedPollsFromServer}</Text>
      </ScrollView>
    </>
  );
}
