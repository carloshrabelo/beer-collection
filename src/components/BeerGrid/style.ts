import styled from "styled-components";

import BeerDetailDOM from "@/components/BeerDetail";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 14rem);
  gap: ${(props) => props.theme.spacer[3]};
  justify-content: center;
`;

export const BeerDetail = styled(BeerDetailDOM)`
  max-width: 768px;
  padding: ${(props) => `${props.theme.spacer[2]} ${props.theme.spacer[3]}`};
`;
