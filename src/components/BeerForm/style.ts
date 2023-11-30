import styled from "styled-components";

import {
  Row as RowDOM,
  Wrapper as WrapperDOM,
} from "@/components/BeerDetail/style";
export {
  Content,
  Body,
  ImageWraper,
  Image,
} from "@/components/BeerDetail/style";
import { Button } from "@/components/Button/index";
import { Label } from "@/components/Form/Field.style";

export const Box = styled.div`
  display: grid;
  flex: 1;
  gap: ${(props) => props.theme.spacer[1]};

  min-width: 12.5rem;
  padding: ${(props) => props.theme.spacer[1]};

  color: ${(props) => props.theme.colors.primary.contrastText};
  text-align: center;

  background: ${(props) => props.theme.colors.primary.main};
  border-radius: ${(props) => props.theme.radius};

  ${Button} {
    align-self: end;
    justify-self: end;
  }
`;

export const Row = styled(RowDOM)<{ align?: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: ${({ align = "" }) => align};
  justify-content: space-between;

  ${Box} {
    flex: 1;
  }
`;

export const Footer = styled.div`
  position: sticky;
  bottom: 0;

  margin-top: ${(props) => props.theme.spacer[2]};
  padding: ${(props) => props.theme.spacer[1]} 0;

  text-align: right;

  background: ${(props) => props.theme.bg.main};
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

export const Wrapper = styled(WrapperDOM)`
  ${Label} {
    flex: 1;
    min-width: 5rem;
  }
  h2 {
    padding: 0 ${(props) => props.theme.spacer[2]};
  }
  h3 {
    padding: 0 ${(props) => props.theme.spacer[3]};
  }
  ul {
    display: grid;
    gap: ${(props) => props.theme.spacer[1]};
    margin: 0;
  }
`;
