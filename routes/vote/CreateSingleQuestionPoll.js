import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, Card, Input } from "react-native-elements";
export default function CreateSingleQuestionPoll({ navigation, route }) {
  return (
    <ScrollView>
      <Card>
        <Input
          placeholder="Poll Title"
          onChangeText={(text) => {
            //   setPollTitle(text);
          }}
        />
        <Input
          placeholder="Question"
          onChangeText={(text) => {
            //   setSingleQuestionPollQuestion(text);
          }}
        />
        <Input
          placeholder="Number of answers wanted"
          onChangeText={(text) => {
            //   setRequiredPollAnswersToEnd(text);
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Input
            containerStyle={{ width: "70%" }}
            placeholder="answer choice here"
            onChangeText={(text) => {
              // setSingleQuestionPollAnswerChoices(text);
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
            //   createNewPoll();
          }}
        />
      </Card>
    </ScrollView>
  );
}
