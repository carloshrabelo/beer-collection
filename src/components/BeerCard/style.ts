import ImageDOM from "next/image";
import styled, { DefaultTheme } from "styled-components";

import CardDOM from "@/components/Card";

const imageOffset = (props: { theme: DefaultTheme }) => props.theme.spacer[5];

export const Name = styled.div`
  margin: 0;
  font-size: 1.25rem;
  text-align: center;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${(props) => props.theme.spacer[2]};
  justify-content: space-between;

  margin-top: ${(props) => props.theme.spacer[1]};

  ${Name} {
    z-index: 1;
    margin-top: -${imageOffset};
  }
`;

export const Image = styled(ImageDOM)`
  position: relative !important;
  transform: translate(0, -${imageOffset});

  max-width: fit-content;
  max-height: fit-content;

  transition: transform ${(props) => props.theme.transition};
`;

export const ImageWraper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 200px;
`;

export const Card = styled(CardDOM)`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacer[1]};
  margin-top: ${imageOffset};

  &:hover ${Image} {
    transform: translate(
      0,
      Calc(-${imageOffset} - ${(props) => props.theme.spacer[3]})
    );
  }
`;
