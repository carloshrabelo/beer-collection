import styled from "styled-components";

export const Card = styled.div`
  padding: ${(props) => props.theme.spacer[2]};
  border-radius: ${(p) => p.theme.radius};
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export default Card;
