"use client";

import { IBeer } from "@/types/beer";

import * as S from "./style";

export default function Table({
  abv,
  ibu,
  target_fg,
  target_og,
  ebc,
  srm,
  ph,
}: Partial<IBeer>) {
  const obj = {
    abv,
    ibu,
    target_fg,
    target_og,
    ebc,
    srm,
    ph,
  };
  return (
    <S.Table>
      <thead>
        <tr>
          {Object.keys(obj).map((key) => (
            <S.TD as="th" key={key}>
              {key}
            </S.TD>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(obj).map((value, index) => (
            <S.TD key={index}>{value}</S.TD>
          ))}
        </tr>
      </tbody>
    </S.Table>
  );
}
