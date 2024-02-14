import { Button, Input, Task } from "@/components";
import { FlatList, Image, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import clipeboard from "../../../assets/clipboard.png";

import * as S from "./styles";
import { useState } from "react";
import { useTheme } from "styled-components";

const Home: React.FC = () => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleButtonPress = () => {
    const newTask = {
      id: Date.now().toString(),
      label: inputValue,
      isChecked: false,
    };

    setToDoList((previousState) => [...previousState, newTask]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setToDoList((previousState) => {
      return previousState.filter((item) => item.id != id);
    });
  };

  const EmptyListComponent = () => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image source={clipeboard} alt="" style={{ marginBottom: 16 }} />
        <Text style={{ color: theme.colors.gray100, fontWeight: "bold" }}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={{ color: theme.colors.gray100 }}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    );
  };

  const handleCheckChange = (id) => {
    setToDoList((previousState) =>
      previousState.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <>
      <S.Header>
        <Image source={logo} alt="" />
      </S.Header>
      <S.AddItemContainer>
        <Input onChange={setInputValue} value={inputValue} />
        <Button onPress={handleButtonPress} />
      </S.AddItemContainer>
      <S.Container>
        <FlatList
          data={toDoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              key={item.id.toString()}
              id={item.id}
              label={item.label}
              handleDelete={handleDelete}
              handleCheckChange={handleCheckChange}
              isChecked={item.isChecked}
            />
          )}
          ListEmptyComponent={EmptyListComponent}
        />
      </S.Container>
    </>
  );
};

export default Home;
