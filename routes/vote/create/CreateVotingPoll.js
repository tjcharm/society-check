import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, Card, Input, Overlay, Divider } from "react-native-elements";
import { pollCategories } from "../../../appConfig/PollCategories";
import { createNewVotingPoll } from "../../../api/VotingPollApi";
import useForm from "../../../utils/useForm";
export default function CreateVotingPoll({ navigation, route }) {
  const { pollType, pollCategory } = route.params;

  const [values, handleChange] = useForm();

  let createNewPoll = async () => {
    let createdPoll = await createNewVotingPoll(pollType, pollCategory);
    console.log(createdPoll);
  };

  return (
    <ScrollView>
      <Card>
        {/* <Input placeholder="Poll Title" onChangeText={handleChange} /> */}
        <Input
          placeholder="Question"
          name="Question"
          onChangeText={(Text) => {
            handleChange(Text, "Question");
          }}
        />
        {/* <Input
          placeholder="Number of answers wanted"
          onChangeText={(text) => {}}
        /> */}
        {/* <View style={{ flexDirection: "row" }}> */}
        {/* <input
            className="py-4 m-1  bg-gray-350 rounded"
            type="username"
            name="username"
            value={values.username || ""}
            onChange={handleChange}
          ></input> */}
        {/* <Input
            containerStyle={{ width: "70%" }}
            placeholder="answer choice here"
            onChangeText={(text) => {}}
          /> */}

        {/* <Button
            containerStyle={{
              width: "30%",
            }}
            title="+"
            type="outline"
            onPress={() => {}}
            buttonStyle={{ marginBottom: 20 }}
          />
        </View> */}

        <Button
          type="solid"
          title="CREATE POLL"
          onPress={() => {
            createNewPoll();
          }}
        />
        <Text>{values.Question}</Text>
      </Card>
    </ScrollView>
  );
}
