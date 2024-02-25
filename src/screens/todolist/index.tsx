import { Button, Input } from "@/components";
import { Image } from "react-native";
import logo from "../../../assets/logo.png";
import useToDoListStore from "@/stores/useToDoList";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { TaskList } from "./components";
import * as S from "./styles";

const TodoList: React.FC = () => {
  const theme = useTheme();
  const { toDoList, addToDo, deleteTask, toggleCheck, countCompletedTasks } =
    useToDoListStore();
  const [inputValue, setInputValue] = useState("");

  const addNewItemToDo = () => {
    const newTask = {
      id: Date.now().toString(),
      label: inputValue,
      isChecked: false,
    };
    addToDo(newTask);
    setInputValue("");
  };

  return (
    <>
      <S.Header>
        <Image source={logo} alt="" />
      </S.Header>
      <S.AddItemContainer>
        <Input onChange={setInputValue} value={inputValue} />
        <Button onPress={addNewItemToDo} />
      </S.AddItemContainer>
      <S.Container>
        <S.ContainerToDoListStatus>
          <S.TextStatus color={theme.colors.primary}>
            Tarefas {toDoList.length}
          </S.TextStatus>
          <S.TextStatus color={theme.colors.secondary}>
            Concluídas {countCompletedTasks()}
          </S.TextStatus>
        </S.ContainerToDoListStatus>
        <TaskList
          toDoList={toDoList}
          toggleCheck={(id) => toggleCheck(id)}
          deleteTask={(id) => {
            deleteTask(id);
          }}
        />
      </S.Container>
    </>
  );
};

export default TodoList;
