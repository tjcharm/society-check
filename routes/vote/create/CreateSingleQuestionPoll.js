import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, Card, Input, Overlay, Divider } from "react-native-elements";
import { pollCategories } from "../../../appConfig/PollCategories";
import { createNewVotingPoll } from "../../../api/VotingPollApi";
export default function CreateSingleQuestionPoll({ navigation, route }) {
  const pollType = route.params.pollType;

  const [pollCategory, setPollCategory] = useState(null);
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

  let displayedCats = [];

  if (
    pollCategoriesFromAppConfig != null &&
    pollCategoriesFromAppConfig !== undefined &&
    pollCategoriesFromAppConfig.length > 0
  ) {
    pollCategoriesFromAppConfig.map((cat) => {
      displayedCats.push(
        <Button
          key={cat}
          title={cat}
          type="solid"
          buttonStyle={{ margin: 10 }}
          onPress={() => {
            setPollCategory(cat);
            setOverlayIsVisable(false);
          }}
        />
      );
    });
  } else {
    return (
      <View>
        <Text>nothing here yet</Text>
      </View>
    );
  }

  const [overlayIsVisable, setOverlayIsVisable] = useState(true);
  return (
    <ScrollView>
      <Overlay
        isVisible={overlayIsVisable}
        overlayStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
        fullScreen={true}
      >
        <>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              marginBottom: 150,
            }}
          >
            Which category fits your poll best?
          </Text>
          <View>{displayedCats}</View>
        </>
      </Overlay>
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
