import styled, { css } from "styled-components";

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacer[1]};
  align-items: flex-start;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  right: 0;
  bottom: -1rem;

  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.error.main};
`;

const FieldError = css`
  border-color: ${(props) => props.theme.colors.error.main};
  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.error.dark}40;
  }
  &:hover {
    border-color: ${(props) => props.theme.colors.error.light};
  }
`;

export const Field = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: ${(props) => `${props.theme.spacer[1]} ${props.theme.spacer[2]}`};

  line-height: 1.5rem;

  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.radius};
  outline: 0;

  transition: border ${(props) => props.theme.transition};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary.dark}40;
  }
  &:hover {
    border-color: ${(props) => props.theme.colors.primary.light};
  }

  ${(props) => props.$hasError && FieldError}
`;

export const FieldArea = styled(Field).attrs({ as: "textarea" })`
  min-height: 5rem;
`;
