import { useState } from "react";

export const useInputs = () => {
  const [inputs, setInputs] = useState({
    userEmail: "",
    password: "",
    nickName: "",
    message: "",
    roomTitle: "",
  });

  const onChangeInput = (event) => {
    const { value, name } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInput = () => {
    setInputs({
      userId: "",
      password: "",
      nickName: "",
      message: "",
      roomTitle: "",
    });
  };

  return [inputs, onChangeInput, clearInput, setInputs];
};
