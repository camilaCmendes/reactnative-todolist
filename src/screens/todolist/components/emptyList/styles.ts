import styled from "styled-components/native";

interface TextBoxProps {
  bold?: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Icon = styled.Image`
  margin-bottom: 16px;
`;

export const TextBox = styled.Text<TextBoxProps>`
  color: ${({ theme }) => theme.colors.gray100};
  font-weight: ${({ bold }) => (bold ? 900 : 400)};
`;
