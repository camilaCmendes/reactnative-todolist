import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  height: 54px;
  width: 54px;
`;
