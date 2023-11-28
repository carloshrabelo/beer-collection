import styled from "styled-components";

import ButtonDOM from "@/components/Button";

export const Fade = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: block;

  background: ${(props) => props.theme.bg.main}8;
`;

export const Content = styled.div`
  overflow: auto;
`;

export const Button = styled(ButtonDOM)`
  align-items: center;
  align-self: self-start;
`;

export const Title = styled.div`
  flex: 1;

  padding: ${(props) => props.theme.spacer[2]};

  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

export const Modal = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: 100%;
  max-height: 100%;

  background: ${(props) => props.theme.bg.main};
  border-radius: ${(props) => props.theme.radius};
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  @media only screen and (min-width: 769px) {
    padding: ${(props) => props.theme.spacer[5]};
  }
`;
