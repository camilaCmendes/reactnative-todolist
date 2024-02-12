import { TextInput } from "react-native";
import * as S from "./styles";
import { useState } from "react";

export const Input: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Input
      placeholder="Adicione uma nova tarefa"
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    ></S.Input>
  );
};
