import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

import get from "@/utils/get";

import * as S from "../Field.style";

type TextAreaProps = RegisterOptions & {
  className?: string;
  name: string;
  label?: string;
  errors?: any;
  register: UseFormRegister<any>;
};

const TextArea = ({
  className,
  label,
  name,
  register,
  errors,
  required,
  ...props
}: TextAreaProps) => {
  const errorMessage = get(errors, name);
  const _required =
    required &&
    (!label ? "This field is required" : `Field "${label}" is required`);

  return (
    <S.Label className={className}>
      {label && <label>{label}</label>}
      <S.FieldArea
        $hasError={!!errorMessage?.message}
        as="input"
        {...register(name, { required: _required, ...props })}
      />
    </S.Label>
  );
};

export default TextArea;
