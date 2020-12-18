import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
export default function VotingPollPreview({ navigation, route }) {
  const { poll, pollType } = route.params;

  let displayedCategoryManager;
  if (pollType === null) {
    displayedCategoryManager = (
      <View>
        <Card
          containerStyle={{
            backgroundColor: "#333",
            borderRadius: 8,
            minHeight: "100%",
          }}
        >
          <Card.Title style={{ color: "white", fontSize: 25 }}>
            {poll.pollTitle}
          </Card.Title>
          <Card.FeaturedSubtitle
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {poll.singleQuestionPollQuestion}
          </Card.FeaturedSubtitle>
          <Button
            style={{ margin: 5 }}
            title={poll.singleQuestionPollAnswerChoices}
          />
          <Button
            style={{ margin: 5 }}
            title={poll.singleQuestionPollAnswerChoices}
          />
          <Button
            style={{ margin: 5 }}
            title={poll.singleQuestionPollAnswerChoices}
          />
          <Button
            style={{ margin: 5 }}
            title={poll.singleQuestionPollAnswerChoices}
          />
        </Card>
      </View>
    );
  } else if (pollType === "singleQuestion") {
    displayedCategoryManager = (
      <View>
        <Card
          containerStyle={{
            backgroundColor: "#333",
            borderRadius: 8,
            minHeight: "100%",
          }}
        >
          <Card.Title style={{ color: "white", fontSize: 25 }}>
            {poll.pollTitle}
          </Card.Title>
          <Card.FeaturedSubtitle
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {poll.singleQuestionPollQuestion}
          </Card.FeaturedSubtitle>
          <Button
            style={{ margin: 5 }}
            title={poll.singleQuestionPollAnswerChoices}
          />
          <Button
            style={{ margin: 5 }}
            title={poll.singleQuestionPollAnswerChoices}
          />
          <Button
            style={{ margin: 5 }}
            title={poll.singleQuestionPollAnswerChoices}
          />
          <Button
            style={{ margin: 5 }}
            title={poll.singleQuestionPollAnswerChoices}
          />
        </Card>
      </View>
    );
  } else if (pollType === "multipleQuestion") {
    displayedCategoryManager = (
      <Card>
        <Card.Title>
          multiple question poll. voting poll preview card title
        </Card.Title>
      </Card>
    );
  }

  return <ScrollView>{displayedCategoryManager}</ScrollView>;
}
