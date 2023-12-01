import styled, { css } from "styled-components";

import InputDOM from "../Input";

const TRACK_SIZE = "1rem";
export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled(InputDOM)`
  max-width: 5rem;
`;

const track = css`
  height: 5px;
  border-radius: 3px;
`;

export const Range = styled.div`
  background-color: ${(props) => props.theme.colors.primary.light};
  z-index: 2;
  position: absolute;
  ${track}
`;

export const Track = styled.div`
  background-color: ${(props) => props.theme.borderColor};
  width: 100%;
  z-index: 1;
  ${track}
`;

const thumbStyle = css`
  pointer-events: all;
  cursor: pointer;

  position: relative;

  width: ${TRACK_SIZE};
  height: ${TRACK_SIZE};
  margin-top: ${(props) => props.theme.spacer[1]};

  background-color: ${(props) => props.theme.colors.primary.main};
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px ${(props) => props.theme.colors.primary.dark};
`;

export const Thumb = styled.input<{
  $active?: boolean;
}>`
  pointer-events: none;

  position: absolute;
  z-index: ${(props) => (props.$active ? 5 : 3)};

  width: 100%;
  min-width: 180px;
  height: 0;

  outline: none;

  /* For Chrome browsers */
  &::-webkit-slider-thumb {
    ${thumbStyle}
  }

  /* For Firefox browsers */
  &::-moz-range-thumb {
    ${thumbStyle}
  }
  & + & {
    z-index: 4;
  }

  &,
  &::-webkit-slider-thumb {
    appearance: none;

    -webkit-tap-highlight-color: transparent;
  }
`;

export const Slider = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  min-width: 180px;
  height: ${TRACK_SIZE};
  padding: ${TRACK_SIZE} 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacer[1]};
`;
