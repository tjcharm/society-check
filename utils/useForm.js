import { useState } from "react";

const useForm = (initialState) => {
  // form state if no initial state is given
  const [state, setState] = useState({});
  // form state if initial state
  const [altState, setAltState] = useState(initialState);

  // handle change if no initial state
  const handleChange = (inputName, inputValue) => {
    setState((state) => ({ ...state, [inputName]: inputValue }));
  };

  // handle change if there is initial state
  const handleChangeWithInitialState = (inputName, inputValue) => {
    setAltState((altState) => ({ ...altState, [inputName]: inputValue }));
  };

  // comparitive operator to determine if initial state was given to the useForm Hook.
  if (initialState) {
    return [altState, handleChangeWithInitialState];
  } else {
    return [state, handleChange];
  }
};

export default useForm;
