import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import VoteCategoryManager from "./consume/VoteCategoryManager";
import VotingPollPreview from "./consume/VotingPollPreview";
import VoteTypeManager from "./create/VoteTypeManager";
import VotingPollPreviewManager from "./consume/VotingPollPreviewManager";
import CreateSingleQuestionPoll from "./create/CreateSingleQuestionPoll";
import CreateMultipleQuestionPoll from "./create/CreateMultipleQuestionPoll";
import SelectCreateVotingPollType from "./create/SelectCreateVotingPollType";
import VoteIntro from "./VoteIntro";
const VoteStack = createStackNavigator();

export default function Account() {
  return (
    <VoteStack.Navigator>
      <VoteStack.Screen name="Vote Intro" component={VoteIntro} />
      <VoteStack.Screen
        name="Vote Category Manager"
        component={VoteCategoryManager}
      />
      <VoteStack.Screen
        name="Select Create Voting Poll Type"
        component={SelectCreateVotingPollType}
      />
      {/* <VoteStack.Screen
        name="Create New Poll"
        component={CreateNewVotingPoll}
      /> */}
      <VoteStack.Screen
        name="Create Single Question Poll"
        component={CreateSingleQuestionPoll}
      />
      <VoteStack.Screen
        name="Create Multiple Question Poll"
        component={CreateMultipleQuestionPoll}
      />
      <VoteStack.Screen
        name="Voting Poll Preview"
        component={VotingPollPreview}
      />
      <VoteStack.Screen
        name="VPPreviewManager"
        component={VotingPollPreviewManager}
      />
    </VoteStack.Navigator>
  );
}
