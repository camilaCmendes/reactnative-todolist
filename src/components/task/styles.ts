import styled from "styled-components/native";

interface TextProps {
  isChecked?: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray500};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
  padding: 16px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const TaskText = styled.Text<TextProps>`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  ${({ isChecked, theme }) =>
    isChecked &&
    `
  text-decoration-line: line-through;
  color: ${theme.colors.gray300};
  `};
`;
