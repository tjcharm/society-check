import { useState } from "react";

const useForm = () => {
  const [state, setState] = useState({});

  const handleChange = (inputValue, inputName) => {
    setState((state) => ({ ...state, [inputName]: inputValue }));
  };

  return [state, handleChange];
};

export default useForm;
