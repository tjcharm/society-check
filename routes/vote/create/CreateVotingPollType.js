import { CURRENT_API } from "@env";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { pollCategories } from "../../../appConfig/PollCategories";
import { createNewVotingPoll } from "../../../api/VotingPollApi";

export default function CreateVotingPollType({ navigation }) {
  const [pollType, setPollType] = useState(null);

  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title style={{ fontSize: 25 }}>
            Would you like to ask one question or more than one?
          </Card.Title>
          <Button
            buttonStyle={{ marginVertical: 15 }}
            title="One Question"
            type="solid"
            onPress={async () => {
              await setPollType("singleQuestion");
              navigation.navigate("Create Voting Poll Category", {
                pollType: pollType,
              });
            }}
          />
          <Button
            buttonStyle={{ marginVertical: 15 }}
            title="Multiple Questions"
            type="solid"
            onPress={() => {
              setPollType("multipleQuestion");
              navigation.navigate("Create Multiple Question Poll");
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
}
