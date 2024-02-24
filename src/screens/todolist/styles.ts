import styled from "styled-components/native";

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.gray700};
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  padding: 8px;
  width: 100%;
`;

export const AddItemContainer = styled.View`
  position: relative;
  top: -30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const ContainerToDoListStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.gray300};
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const TextStatus = styled.Text<{ color: string }>`
  font-weight: 900;
  color: ${({ color }) => color};
`;
