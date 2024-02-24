import { Button } from "@/components";
import { Image } from "react-native";
import logo from "../../../assets/logo.png";

import * as S from "./styles";

const Home: React.FC = () => {
  const MOCK_TODOLIST = ["Compras", "Tarefas", "Teste"];

  const goToList = () => {};

  return (
    <>
      <S.Header>
        <Image source={logo} alt="" />
      </S.Header>
      <S.Container>
        <Button onPress={() => null} label="+ Todo" size="lg" />
        {MOCK_TODOLIST.map((item, index) => (
          <Button
            onPress={() => null}
            label={item}
            size="lg"
            color={index % 2 == 0 ? "secondaryDark" : "primaryDark"}
          />
        ))}
      </S.Container>
    </>
  );
};

export default Home;
