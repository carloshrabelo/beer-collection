import theme from "@/theme";

export type Theme = typeof theme;
export type Colors = keyof Theme["colors"];

export interface Color {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}
