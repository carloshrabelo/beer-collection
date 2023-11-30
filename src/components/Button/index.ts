"use client";

import styled from "styled-components";

import { getColorVariant } from "@/theme/utils";
import { Colors } from "@/types/theme";

export const Button = styled.button<{ color?: Colors }>`
  cursor: pointer;

  display: inline-flex;
  gap: ${(props) => props.theme.spacer[1]};
  align-items: center;
  justify-content: center;

  padding: ${(props) => `${props.theme.spacer[1]} ${props.theme.spacer[2]}`};

  color: ${getColorVariant("contrastText")};
  text-decoration: none;

  background-color: ${getColorVariant("main")};
  border: 1px solid ${getColorVariant("main")};
  border-radius: ${(p) => p.theme.radius};
  outline: none;

  transition: background-color ${(p) => p.theme.transition};

  &:active {
    background-color: ${getColorVariant("light")};
  }
  &:hover {
    background-color: ${getColorVariant("dark")};
  }
`;

export default Button;
