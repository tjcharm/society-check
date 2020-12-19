import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, Card, Input, Overlay, Divider } from "react-native-elements";
import { pollCategories } from "../../../appConfig/PollCategories";
import { createNewVotingPoll } from "../../../api/VotingPollApi";
export default function CreateVotingPoll({ navigation, route }) {
  const { pollType, pollCategory } = route.params;

  const [pollId, setPollId] = useState(1);
  const [pollPosterUserId, setPollPosterUserId] = useState(1234);
  const [pollPosterUserUsername, setPollPosterUserUsername] = useState(
    "tjcharm"
  );
  const [pollTitle, setPollTitle] = useState(null);
  const [requiredPollAnswersToEnd, setRequiredPollAnswersToEnd] = useState(1);
  const [singleQuestionPollQuestion, setSingleQuestionPollQuestion] = useState(
    null
  );
  const [
    singleQuestionPollAnswerChoices,
    setSingleQuestionPollAnswerChoices,
  ] = useState(null);
  const [
    multipleQuestionPollQuestions,
    setMultipleQuestionPollQuestions,
  ] = useState(null);
  const [
    multipleQuestionPollAnswerChoices,
    setMultipleQuestionPollAnswerChoices,
  ] = useState(null);

  const [
    pollCategoriesFromAppConfig,
    setpollCategoriesFromAppConfig,
  ] = useState(pollCategories);

  let createNewPoll = async () => {
    let createdPoll = await createNewVotingPoll(
      pollType,
      pollCategory,
      pollId,
      pollPosterUserId,
      pollPosterUserUsername,
      pollTitle,
      requiredPollAnswersToEnd,
      singleQuestionPollQuestion,
      singleQuestionPollAnswerChoices,
      multipleQuestionPollQuestions,
      multipleQuestionPollAnswerChoices
    );
    console.log(createdPoll);
  };

  return (
    <ScrollView>
      <Card>
        <Input
          placeholder="Poll Title"
          onChangeText={(text) => {
            setPollTitle(text);
          }}
        />
        <Input
          placeholder="Question"
          onChangeText={(text) => {
            setSingleQuestionPollQuestion(text);
          }}
        />
        <Input
          placeholder="Number of answers wanted"
          onChangeText={(text) => {
            setRequiredPollAnswersToEnd(text);
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Input
            containerStyle={{ width: "70%" }}
            placeholder="answer choice here"
            onChangeText={(text) => {
              setSingleQuestionPollAnswerChoices(text);
            }}
          />

          <Button
            containerStyle={{
              width: "30%",
            }}
            title="+"
            type="outline"
            onPress={() => {}}
            buttonStyle={{ marginBottom: 20 }}
          />
        </View>
        {/* <Text>{newAnswers}</Text> */}
        <Button
          type="solid"
          title="CREATE POLL"
          onPress={() => {
            createNewPoll();
          }}
        />
      </Card>
    </ScrollView>
  );
}
