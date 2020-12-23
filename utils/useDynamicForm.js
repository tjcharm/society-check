import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Card, Input, Overlay, Divider } from "react-native-elements";

const useDynamicForm = () => {
  const [returnedItems, setReturnedItems] = useState([]);

  const [count, setCount] = useState(1);

  const addFormItem = async (handleChangeWithInitialState) => {
    let key = Math.random();
    // setCount(count + 1);
    setReturnedItems((returnedItems) => [
      ...returnedItems,
      <View style={{ flexDirection: "row" }} key={key}>
        {/* <Text>{key}</Text> */}
        <Input
          containerStyle={{ width: "100%" }}
          placeholder={key.toString()}
          onChangeText={(Text) => {
            handleChangeWithInitialState(
              "singleQuestionPollAnswerChoices",
              Text
            );
          }}
        />
      </View>,
    ]);
  };

  return [returnedItems, addFormItem];
};

export default useDynamicForm;
