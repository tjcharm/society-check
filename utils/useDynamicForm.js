import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Card, Input, Overlay, Divider } from "react-native-elements";

const useDynamicForm = () => {
  const [returnedItems, setReturnedItems] = useState([]);
  const [count, setCount] = useState(1);

  const addFormItem = async () => {
    let key = Math.random();
    // setCount(count + 1);
    setReturnedItems((returnedItems) => [
      ...returnedItems,
      <View style={{ flexDirection: "row" }} key={key}>
        {/* <Text>{key}</Text> */}
        <Input
          containerStyle={{ width: "70%" }}
          placeholder={key.toString()}
          onChangeText={(Text) => {
            // dynamic answer state here
          }}
        />
        <Button
          containerStyle={{
            width: "30%",
          }}
          title={key.toString()}
          type="outline"
          buttonStyle={{ marginBottom: 20 }}
        />
      </View>,
    ]);
  };

  return [returnedItems, addFormItem];
};

export default useDynamicForm;
