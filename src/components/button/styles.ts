import styled from "styled-components/native";
import type { ButtonLayoutProps } from "./interface";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const SPACE = 30;
const SPACES_IN_A_ROW = 3;
const BUTTONS_PER_ROW = 2;
const buttonSize = (screenWidth - SPACES_IN_A_ROW * SPACE) / BUTTONS_PER_ROW;

export const Button = styled.TouchableOpacity<ButtonLayoutProps>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
       min-height: 54px;
       min-width: 54px;`;
      case "lg":
        return `
        width: ${buttonSize}px;
        height: ${buttonSize}px`;
    }
  }}
`;

export const Text = styled.Text<ButtonLayoutProps>`
  color: ${({ theme }) => theme.colors.gray100};

  ${({ size }) =>
    size === "lg" &&
    ` font-size: 20px;
        font-weight: 900;`}
`;

export const Image = styled.Image<ButtonLayoutProps>`
  ${({ size }) => size === "lg" && `width: 20px; height: 20px;`}
`;
