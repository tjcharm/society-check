import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import VoteCategoryManager from "./consume/VoteCategoryManager";
import VotingPollPreview from "./consume/VotingPollPreview";
import VotingPollPreviewManager from "./consume/VotingPollPreviewManager";
import CreateVotingPollType from "./create/CreateVotingPollType";
import VoteIntro from "./VoteIntro";
import CreateVotingPollCategory from "./create/CreateVotingPollCategory";
import CreateVotingPoll from "./create/CreateVotingPoll";
const VoteStack = createStackNavigator();

export default function Account() {
  return (
    <VoteStack.Navigator>
      {/* intro screen */}
      <VoteStack.Screen name="Vote Intro" component={VoteIntro} />
      {/* create new poll route */}
      <VoteStack.Screen
        name="Create Voting Poll Type"
        component={CreateVotingPollType}
      />
      <VoteStack.Screen
        name="Create Voting Poll Category"
        component={CreateVotingPollCategory}
      />
      <VoteStack.Screen
        name="Create Voting Poll"
        component={CreateVotingPoll}
      />
      {/* consume polls route */}
      <VoteStack.Screen
        name="Vote Category Manager"
        component={VoteCategoryManager}
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
