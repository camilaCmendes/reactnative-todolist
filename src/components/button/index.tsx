import { View, Text, Image } from "react-native";
import plus from "../../../assets/plus.png";
import * as S from "./styles";

interface ButtonProps {
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <S.Button onPress={props.onPress}>
      <Image source={plus} alt="" />
    </S.Button>
  );
};
