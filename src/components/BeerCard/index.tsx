"use client";

import Button from "@/components/Button";
import { IBeer } from "@/types/beer";

import * as S from "./style";

interface Props extends IBeer {
  as?: string;
  onSelected?: () => void;
}

export default function BeerCard({
  image_url,
  name,
  tagline,
  as,
  onSelected,
}: Props) {
  return (
    <S.Card as={as}>
      <S.ImageWraper>
        <S.Image src={image_url} alt="Beer" fill />
      </S.ImageWraper>
      <S.Body>
        <S.Name>{name}</S.Name>
        <div>{tagline}</div>
        {!onSelected ? null : (
          <Button onClick={onSelected}>More details</Button>
        )}
      </S.Body>
    </S.Card>
  );
}
