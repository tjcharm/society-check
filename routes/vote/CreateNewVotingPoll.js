import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { pollCategories } from "../../appConfig/PollCategories";
import { API } from "../../appConfig/ReactStoreApi";
export default function VotingPollPreview({ navigation }) {
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

  let answerChoiceView = (
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
        onPress={async () => {
          displayedAnswerChoices.push(answerChoiceView);
        }}
        buttonStyle={{ marginBottom: 20 }}
      />
    </View>
  );

  let createNewPoll = async () => {
    fetch(`${API}/votingPolls/createNewVotingPoll`, {
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

  let displayedCreateNewVotingPoll;
  if (pollType === null) {
    displayedCreateNewVotingPoll = (
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
            }}
          />
          <Button
            buttonStyle={{ margin: 5 }}
            title="Multiple Questions"
            type="solid"
            onPress={() => {
              setPollType("multipleQuestion");
            }}
          />
        </Card>
      </View>
    );
  } else if (
    pollType != null &&
    pollType != undefined &&
    pollCategory == null
  ) {
    displayedCreateNewVotingPoll = (
      <ScrollView>
        <Card>
          <Card.Title>What category does your poll fall under best?</Card.Title>
          {displayedCats}
        </Card>
      </ScrollView>
    );
  } else if (
    pollType != null &&
    pollType != undefined &&
    pollType === "singleQuestion" &&
    pollCategory != null &&
    pollCategory != undefined
  ) {
    displayedCreateNewVotingPoll = (
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
              onPress={() => {
                alert("hello");
                // THERE SHOULD BE A WAY TO DYNAMICALLY ADD ANSWER CHOICES
              }}
              buttonStyle={{ marginBottom: 20 }}
            />
          </View>

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

  return <ScrollView>{displayedCreateNewVotingPoll}</ScrollView>;
}
