import styled from "styled-components/native";

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxLabel = styled.Text`
  margin-left: 8px;
`;

export const CheckboxSquare = styled.View<{ checked: boolean }>`
  height: 24px;
  width: 24px;
  border-radius: 360px;
  border: 2px solid
    ${({ checked, theme }) =>
      checked ? theme.colors.secondaryDark : theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const CheckboxInner = styled.View`
  height: 12px;
  width: 12px;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  border-radius: 360px;
`;
