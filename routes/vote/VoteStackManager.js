import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import VoteCategoryManager from "./VoteCategoryManager";
import CreateNewVotingPoll from "./CreateNewVotingPoll";
import VotingPollPreview from "./VotingPollPreview";
import VoteTypeManager from "./VoteTypeManager";
import VotingPollPreviewManager from "./VotingPollPreviewManager";
import CreateSingleQuestionPoll from "./CreateSingleQuestionPoll";
import CreateMultipleQuestionPoll from "./CreateMultipleQuestionPoll";
const VoteStack = createStackNavigator();

export default function Account() {
  return (
    <VoteStack.Navigator>
      <VoteStack.Screen name="Vote Type Manager" component={VoteTypeManager} />
      <VoteStack.Screen
        name="Vote Category Manager"
        component={VoteCategoryManager}
      />
      <VoteStack.Screen
        name="Create New Poll"
        component={CreateNewVotingPoll}
      />
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
      {/* need a voting poll preview manager */}
    </VoteStack.Navigator>
  );
}
