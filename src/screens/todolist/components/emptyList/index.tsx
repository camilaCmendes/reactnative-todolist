import { useTheme } from "styled-components/native";
import clipboard from "../../../../../assets/clipboard.png";
import * as S from "./styles";

export const EmptyList = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Icon source={clipboard} alt="Clipboard" />
      <S.TextBox bold>Você ainda não tem tarefas cadastradas</S.TextBox>
      <S.TextBox>Crie tarefas e organize seus itens a fazer</S.TextBox>
    </S.Container>
  );
};
