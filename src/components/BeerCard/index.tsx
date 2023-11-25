"use client";

import Link from "next/link";

import Button from "@/components/Button";
import { IBeer } from "@/types/beer";

import * as S from "./style";

interface Props extends IBeer {
  as?: string;
}

export default function BeerCard({ image_url, name, tagline, id, as }: Props) {
  return (
    <S.Card as={as}>
      <S.ImageWraper>
        <S.Image src={image_url} alt="Beer" fill />
      </S.ImageWraper>
      <S.Body>
        <S.Name>{name}</S.Name>
        <div>{tagline}</div>
        <Button as={Link} href={`/${id}`}>
          More details
        </Button>
      </S.Body>
    </S.Card>
  );
}
