import styled from "styled-components";

import InputDOM from "@/components/Form/Input";
import MultiSliderDOM from "@/components/Form/MultiSlider";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spacer[2]};

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MultiSlider = styled(MultiSliderDOM)`
  flex: 1;
`;

export const Input = styled(InputDOM)<{ $flex: number }>`
  flex: ${(props) => props.$flex || 1};
`;
