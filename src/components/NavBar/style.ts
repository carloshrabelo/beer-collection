import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.25rem;
  list-style: none;
`;

export const Nav = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Navbar = styled.div`
  position: sticky;
  z-index: 1000;
  top: 0;

  display: flex;
  gap: ${(props) => props.theme.spacer[1]};
  align-items: center;
  justify-content: space-between;

  min-height: 2.5rem;
  margin-bottom: ${(props) => props.theme.spacer[3]};
  padding: ${(props) => `${props.theme.spacer[1]} ${props.theme.spacer[2]}`};

  background: ${(props) => props.theme.colors.primary.main};
`;
