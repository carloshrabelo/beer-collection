"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import theme from "@/theme";

import GlobalStyle from "./global";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
