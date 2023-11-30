import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

import * as S from "../Field.style";

const Placeholder = styled.option`
  display: none;
`;

type InputProps = RegisterOptions & {
  className?: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  options: { label: string }[] &
    React.OptionHTMLAttributes<HTMLOptionElement>[];
};

export default function Select({
  name,
  register,
  options,
  className,
  label,
  placeholder,
  ...props
}: InputProps) {
  return (
    <S.Label className={className}>
      {label && <div>{label}</div>}

      <S.Field as="select" {...register(name, props)}>
        {!placeholder ? null : <Placeholder>{placeholder}</Placeholder>}
        {options.map((option, key) => (
          <option key={key} {...option}>
            {option.label}
          </option>
        ))}
      </S.Field>
    </S.Label>
  );
}
