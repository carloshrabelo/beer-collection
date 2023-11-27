import styled from "styled-components";

export const TD = styled.td`
  padding: 0 ${(props) => props.theme.spacer[1]};

  text-align: left;
  text-transform: capitalize;

  border-style: solid;
  border-width: 1px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
