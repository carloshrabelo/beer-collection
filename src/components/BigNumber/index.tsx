"use client";

import { ReactNode } from "react";

import * as S from "./style";
interface Props {
  title: string;
  sub?: string;
  children: ReactNode;
  className?: string;
}

export default function BigNumber({
  title,
  sub,
  children,
  className = "",
}: Props) {
  return (
    <S.Box className={className}>
      {title}
      <S.Value>{children}</S.Value>
      {!sub ? null : <S.Sub>{sub}</S.Sub>}
    </S.Box>
  );
}
