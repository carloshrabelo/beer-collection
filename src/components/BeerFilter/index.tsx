"use client";

import { useReducer, useEffect } from "react";

import { IFilter } from "@/context/beer";

import * as S from "./style";

interface Props {
  as?: string;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: IFilter) => void;
}

const reducer = (state: IFilter, action: IFilter) => ({
  ...state,
  ...action,
});

export default function BeerFilter({ className, onChange }: Props) {
  const currentMonth = new Date().toISOString().match(/\d{4}-\d{2}/)?.[0];
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    onChange(state);
  }, [onChange, state]);

  return (
    <div className={className}>
      <S.Row>
        <S.Input
          $flex={2}
          label="Name"
          type="search"
          name="name"
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
        <S.Input
          label="Brewed after"
          name="first_brewed_start"
          type="month"
          max={state.first_brewed_end || currentMonth}
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
        <S.Input
          label="Brewed before"
          name="first_brewed_end"
          type="month"
          min={state.first_brewed_start}
          max={currentMonth}
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
      </S.Row>
      <S.Row>
        <S.MultiSlider
          label="Attenuation Level"
          name="attenuation_level"
          value={state.attenuation_level}
          min={0}
          max={100}
          step={0.1}
          onChange={(value) => dispatch({ attenuation_level: value })}
        />

        <S.MultiSlider
          label="Volume"
          name="volume"
          value={state.volume}
          min={0}
          max={100}
          step={0.1}
          onChange={(value) => dispatch({ volume: value })}
        />
        <S.MultiSlider
          label="Boil Volume"
          name="boil_volume"
          value={state.boil_volume}
          min={0}
          max={100}
          step={0.1}
          onChange={(value) => dispatch({ boil_volume: value })}
        />
      </S.Row>
    </div>
  );
}
