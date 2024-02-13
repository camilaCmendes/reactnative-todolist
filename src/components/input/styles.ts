import styled from "styled-components/native";

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray300,
  selectionColor: theme.colors.gray100,
}))<{ isFocused: boolean }>`
  background-color: ${({ theme }) => theme.colors.gray500};
  border-radius: 6px;
  height: 54px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.gray100};
  border: 2px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.colors.secondaryDark : "transparent"};
`;
