import styled from "styled-components";

export const Sub = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  text-align: left;
  text-transform: capitalize;
`;

export const Value = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Box = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacer[1]};

  padding: ${(props) => props.theme.spacer[1]};

  color: ${(props) => props.theme.colors.primary.contrastText};
  text-align: center;

  background: ${(props) => props.theme.colors.primary.main};
  border-radius: ${(props) => props.theme.radius};
`;
