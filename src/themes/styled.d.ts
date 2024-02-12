import "styled-components/native";
import { ThemeInterface } from "./theme.interface";

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeInterface {}
}
