import { CURRENT_API } from "@env";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { pollCategories } from "../../appConfig/PollCategories";

export default function VotingPollPreview({ navigation }) {
  const [newAnswers, setNewAnswers] = useState([]);

  // form choices
  const [pollType, setPollType] = useState(null);
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

  const newPoll = {
    pollType: pollType,
    pollCategory: pollCategory,
    pollId: pollId,
    pollPosterUserId: pollPosterUserId,
    pollPosterUserUsername: pollPosterUserUsername,
    pollTitle: pollTitle,
    requiredPollAnswersToEnd: requiredPollAnswersToEnd,
    singleQuestionPollQuestion: singleQuestionPollQuestion,
    singleQuestionPollAnswerChoices: singleQuestionPollAnswerChoices,
    multipleQuestionPollQuestions: multipleQuestionPollQuestions,
    multipleQuestionPollAnswerChoices: multipleQuestionPollAnswerChoices,
  };

  let createNewPoll = async () => {
    fetch(`${CURRENT_API}/votingPolls/createNewVotingPoll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPoll),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // sets the data from database to inventory items
        console.log(data);
      });
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

  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title>
            Would you like to ask one question or more than one?
          </Card.Title>
          <Button
            buttonStyle={{ margin: 5 }}
            title="One Question"
            type="solid"
            onPress={() => {
              setPollType("singleQuestion");
              navigation.navigate("Create Single Question Poll");
            }}
          />
          <Button
            buttonStyle={{ margin: 5 }}
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
