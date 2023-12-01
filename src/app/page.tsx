"use client";

import { useState } from "react";
import { TbFilter } from "react-icons/tb";

import BeerGrid from "@/components/BeerGrid";
import { useBeerAPI } from "@/hook/useBeerAPI";

import * as S from "./style";

export default function App() {
  const { data, setFilter } = useBeerAPI();
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <S.Filter onChange={setFilter} $visible={showFilter} />
      <div>
        <S.ButtonCTA onClick={() => setShowFilter((e) => !e)}>
          <TbFilter />
        </S.ButtonCTA>
      </div>
      <BeerGrid data={data} />
    </>
  );
}
