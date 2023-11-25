import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 14rem);
  gap: ${(props) => props.theme.spacer[3]};
  justify-content: center;
`;
