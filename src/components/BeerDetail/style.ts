import ImageDOM from "next/image";
import styled from "styled-components";

import BigNumberDOM from "@/components/BigNumber";

export const Title = styled.div`
  margin-bottom: ${(props) => props.theme.spacer[1]};
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${(props) => props.theme.spacer[1]};
  justify-content: space-between;

  margin-top: ${(props) => props.theme.spacer[1]};
`;

export const Image = styled(ImageDOM)`
  position: sticky !important;

  width: auto !important;
  max-width: 160px;
  min-height: 280px !important;
  max-height: 320px !important;
  margin-bottom: 3rem;
`;

export const ImageWraper = styled.div`
  position: relative;

  display: grid;
  align-content: space-between;
  justify-items: center;

  min-width: 160px;

  @media only screen and (min-width: 426px) {
    max-width: 260px;
  }
`;

export const Body = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacer[3]};

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: ${(props) => props.theme.spacer[1]};
`;

export const BigNumber = styled(BigNumberDOM)``;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacer[1]};

  @media only screen and (max-width: 768px) {
    ${BigNumber} {
      flex: 1;
    }
  }
`;
