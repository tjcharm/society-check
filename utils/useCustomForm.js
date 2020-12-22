import React, { useState } from "react";
import { View, Text } from "react-native";
import useForm from "./useForm";


const useCustomForm = (formWrapper,childComponents) => {

    const initialState = {
        formWrapper: formWrapper,
        // formwrapper: View,
        childComponents: childComponents,
        //childComponents: [Input, Button],
        
    }

const [values, handleChangeWithInitialState] = useForm(initialState)



  const [returnedItems, setReturnedItems] = useState([]);
  const [count, setCount] = useState(1);

  const addFormItem = async () => {
    let key = Math.random();
    // setCount(count + 1);
    setReturnedItems((returnedItems) => [
      ...returnedItems,
      <View key={key}>
        
      </View>,
    ]);
  };

  return [returnedItems, addFormItem];
};

export default useDynamicForm;
