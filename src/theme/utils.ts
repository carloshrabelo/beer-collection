import { DefaultTheme } from "styled-components";

import { Color, Colors } from "@/types/theme";

const defaultColor = "primary";

export const getColorVariant =
  (variant: keyof Color) => (p: { theme: DefaultTheme; color?: Colors }) =>
    p.theme.colors[p.color || defaultColor][variant];
