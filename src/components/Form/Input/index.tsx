import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

import get from "@/utils/get";

import * as S from "../Field.style";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  RegisterOptions & {
    name: string;
    label?: string;
    errors?: any;
    register?: UseFormRegister<any>;
  };

const Input = ({
  className,
  label,
  name,
  type = "text",
  step,
  register,
  errors,
  required,
  ...props
}: InputProps) => {
  const errorMessage = get(errors, name);
  const _required =
    required &&
    (!label ? "This field is required" : `Field "${label}" is required`);

  const inputProps = !register
    ? ({ required, ...props } as React.InputHTMLAttributes<HTMLInputElement>)
    : register(name, { required: _required, ...props });

  return (
    <S.Label className={className}>
      {label && <div>{label}</div>}
      <S.Field
        $hasError={!!errorMessage?.message}
        as="input"
        name={name}
        step={step}
        type={type}
        {...inputProps}
      />
      <S.ErrorMessage>{errorMessage?.message}</S.ErrorMessage>
    </S.Label>
  );
};

export default Input;
