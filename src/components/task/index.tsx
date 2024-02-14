import * as S from "./styles";
import { Checkbox } from "../checkbox";
import trashIcon from "../../../assets/trash.png";
import { Image, TouchableOpacity, TouchableOpacityBase } from "react-native";
import { useEffect, useState } from "react";

interface CheckboxProps {
  id: string;
  isChecked?: boolean;
  label: string;
  handleDelete: (id: string) => void;
}

export const Task: React.FC<CheckboxProps> = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <S.Container id={props.id}>
      <Checkbox isChecked={props.isChecked} onCheckChange={setIsChecked} />
      <S.TaskText isChecked={isChecked}>{props.label}</S.TaskText>
      <TouchableOpacity onPress={() => props.handleDelete(props.id)}>
        <Image source={trashIcon} alt="" style={{ alignSelf: "flex-end" }} />
      </TouchableOpacity>
    </S.Container>
  );
};
