import Home from "@/screens/home";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Layout } from "./App.styles";
import { theme } from "./src/themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout>
          <Home />
        </Layout>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
}
