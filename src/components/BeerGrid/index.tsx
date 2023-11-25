"use client";
import BeerCard from "@/components/BeerCard";
import { IBeer } from "@/types/beer";

import * as S from "./style";

interface Props {
  data?: IBeer[];
}

export default function BeerGrid({ data }: Props) {
  return (
    <S.Wrapper>
      {data?.map((beer) => (
        <BeerCard as="article" key={beer.id} {...beer}></BeerCard>
      ))}
    </S.Wrapper>
  );
}
