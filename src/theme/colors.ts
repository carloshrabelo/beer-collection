import { Color } from "@/types/theme";

const primary: Color = {
  main: "#ffc500",
  light: "#ffd74f",
  dark: "#ffb500",
  contrastText: "#000",
};

const secondary: Color = {
  main: "#444",
  light: "#666",
  dark: "#222",
  contrastText: "#fff",
};

const error: Color = {
  main: "#d32f2f",
  light: "#db5858",
  dark: "#932020",
  contrastText: "#fff",
};

const success: Color = {
  main: "#2e7d32",
  light: "#57975b",
  dark: "#205723",
  contrastText: "#fff",
};

export const colors = {
  primary,
  secondary,
  success,
  error,
};

export default colors;
