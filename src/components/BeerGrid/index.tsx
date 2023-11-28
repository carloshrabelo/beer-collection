"use client";

import BeerCard from "@/components/BeerCard";
import { useModal } from "@/hook/useModal";
import { IBeer } from "@/types/beer";

import * as S from "./style";

interface Props {
  data?: IBeer[];
}

export default function BeerGrid({ data }: Props) {
  const { openModal } = useModal();

  const onSelected =
    ({ name, ...data }: IBeer) =>
    () =>
      openModal(<S.BeerDetail {...data} />, { title: name });

  return (
    <S.Wrapper>
      {data?.map((beer) => (
        <BeerCard
          as="article"
          key={beer.id}
          {...beer}
          onSelected={onSelected(beer)}
        />
      ))}
    </S.Wrapper>
  );
}
