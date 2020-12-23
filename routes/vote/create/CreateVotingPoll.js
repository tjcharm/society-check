import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, Card, Input, Overlay, Divider } from "react-native-elements";
import { pollCategories } from "../../../appConfig/PollCategories";
import { createNewVotingPoll } from "../../../api/VotingPollApi";
import useForm from "../../../utils/useForm";
import useDynamicForm from "../../../utils/useDynamicForm";
export default function CreateVotingPoll({ navigation, route }) {
  const { pollType, pollCategory } = route.params;

  const [returnedItems, addFormItem] = useDynamicForm();

  const initialState = {
    pollType: pollType,

    pollCategory: pollCategory,

    pollId: Math.random(),

    pollPosterUserId: "1",

    pollPosterUserUsername: "tjcharm",

    pollTitle: null,

    requiredPollAnswersToEnd: "1",

    singleQuestionPollQuestion: null,

    singleQuestionPollAnswerChoices: null,

    multipleQuestionPollQuestions: null,

    multipleQuestionPollAnswerChoices: null,
  };

  const [values, handleChangeWithInitialState] = useForm(initialState);

  let createNewPoll = async () => {
    let createdPoll = await createNewVotingPoll(pollType, pollCategory);
    console.log(createdPoll);
  };

  return (
    <ScrollView>
      <Card>
        <Input
          placeholder="Poll Title"
          name="pollTitle"
          onChangeText={(Text) => {
            handleChangeWithInitialState("pollTitle", Text);
          }}
        />
        <Input
          placeholder="Question"
          name="singleQuestionPollQuestion"
          onChangeText={(Text) => {
            handleChangeWithInitialState("singleQuestionPollQuestion", Text);
          }}
        />
        <Input
          placeholder="Number of answers wanted"
          name="requiredPollAnswersToEnd"
          onChangeText={(Text) => {
            handleChangeWithInitialState("requiredPollAnswersToEnd", Text);
          }}
        />
        <View style={{ flexDirection: "row" }}>
          {/* <Text>{currentDynamicFormItems}</Text> */}
          <Input
            containerStyle={{ width: "70%" }}
            placeholder="answer choice here"
            onChangeText={(Text) => {
              handleChangeWithInitialState(
                "singleQuestionPollAnswerChoices",
                Text
              );
            }}
          />

          <Button
            containerStyle={{
              width: "30%",
            }}
            title="+"
            type="outline"
            onPress={() => {
              addFormItem(handleChangeWithInitialState);
            }}
            buttonStyle={{ marginBottom: 20 }}
          />
        </View>

        {returnedItems}

        <Button
          type="solid"
          title="CREATE POLL"
          onPress={() => {
            createNewPoll();
          }}
        />

        <Text>poll title ---> {values.pollTitle}</Text>
        <Text>
          {" "}
          singleQuestionPollQuestion value --->{" "}
          {values.singleQuestionPollQuestion}
        </Text>
        <Text>
          {" "}
          requiredPollAnswersToEnd value ---> {values.requiredPollAnswersToEnd}
        </Text>
        <Text>
          {" "}
          poll answer choices value --->{" "}
          {values.singleQuestionPollAnswerChoices}
        </Text>
      </Card>
    </ScrollView>
  );
}
