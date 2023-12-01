import styled, { css } from "styled-components";

import BeerFilter from "@/components/BeerFilter";
import Button from "@/components/Button";

export const ButtonCTA = styled(Button)`
  position: fixed;
  z-index: 10000;
  right: ${(props) => props.theme.spacer[1]};
  bottom: ${(props) => props.theme.spacer[1]};

  width: 3rem;
  height: 3rem;

  font-size: 3rem;

  border-radius: 50%;
`;

const filterHidden = css`
  max-height: 0;
  padding: 0 ${(props) => props.theme.spacer[2]};

  @media only screen and (min-width: 769px) {
    max-height: 0;
  }
`;

export const Filter = styled(BeerFilter)<{ $visible: boolean }>`
  position: sticky;
  z-index: 1000;
  top: 3.5rem;

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacer[1]};

  margin-top: -${(props) => props.theme.spacer[3]};
  padding: ${(props) => props.theme.spacer[2]};

  background: ${(props) => props.theme.bg.main};
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;

  transition: ${(props) => props.theme.transition};
  transition-property: padding, max-height, min-height, height;

  overflow: hidden;

  max-height: 100vh;

  @media only screen and (min-width: 769px) {
    max-height: 200px;
  }

  ${(props) => !props.$visible && filterHidden}
`;
