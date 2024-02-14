import { TextInput } from "react-native";
import * as S from "./styles";
import { useState } from "react";

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Input
      placeholder="Adicione uma nova tarefa"
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={props.onChange}
      value={props.value}
    />
  );
};
