import * as S from "./styles";
import { Checkbox } from "../checkbox";
import trashIcon from "../../../assets/trash.png";
import { Image } from "react-native";
import { useEffect, useState } from "react";

interface CheckboxProps {
  isChecked?: boolean;
  label: string;
}

export const Task: React.FC<CheckboxProps> = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <S.Container>
      <Checkbox isChecked={props.isChecked} onCheckChange={setIsChecked} />
      <S.TaskText isChecked={isChecked}>{props.label}</S.TaskText>
      <Image source={trashIcon} alt="" style={{ alignSelf: "flex-end" }} />
    </S.Container>
  );
};
