import Home from "@/screens/home";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/themes/theme";
import { Layout } from "./App.styles";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

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
