import { View, Text, Image } from "react-native";
import plus from "../../../assets/plus.png";
import * as S from "./styles";
import type { ButtonLayoutProps } from "./interface";

interface ButtonProps extends ButtonLayoutProps {
  onPress: () => void;
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  size = "sm",
  icon,
  color = "primaryDark",
}) => {
  return (
    <S.Button size={size} onPress={onPress} color={color}>
      {icon && <S.Image source={plus} alt="" size={size} />}
      {label && <S.Text size={size}>{label}</S.Text>}
    </S.Button>
  );
};
