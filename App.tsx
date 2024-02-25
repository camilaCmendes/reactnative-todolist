import { Routes } from "@/routes/index";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Routes />
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
}
