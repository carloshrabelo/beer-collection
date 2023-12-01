import React, { ChangeEvent, useMemo } from "react";

import * as S from "./style";

export interface Value {
  min: number;
  max: number;
}

interface MultiSliderProps {
  min: number;
  max: number;
  step?: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: Value) => void;
  label?: string;
  name?: string;
  value?: Value;
  className?: string;
}

const MultiSlider = ({
  className,
  min,
  max,
  step = 1,
  onChange,
  label,
  name,
  value,
}: MultiSliderProps) => {
  const state = value || { min, max };

  const dispatch = (state: Partial<Value>) =>
    onChange({
      min,
      max,
      ...value,
      ...state,
    });

  const rangeWidth = useMemo(
    () => `${((state.max - state.min) / (max - min)) * 100}%`,
    [state, min, max],
  );
  const rangeLeft = useMemo(
    () => `${((state.min - min) / (max - min)) * 100}%`,
    [state.min, min, max],
  );

  const handleChange =
    (key: "min" | "max") => (event: ChangeEvent<HTMLInputElement>) => {
      const limit = key === "min" ? state.max - step : state.min + step;
      const value = Math[key](+event.target.value, limit);
      dispatch({ [key]: value });
    };

  return (
    <S.Wrapper className={className}>
      <div>{label}</div>
      <S.Slider>
        <S.Thumb
          type="range"
          min={min}
          max={max}
          step={step}
          value={state.min}
          onChange={handleChange("min")}
          $active={state.min > max - 100}
        />

        <S.Thumb
          type="range"
          min={min}
          max={max}
          step={step}
          value={state.max}
          onChange={handleChange("max")}
          $active={state.max > max - 100}
        />

        <S.Track />
        <S.Range
          style={{
            width: rangeWidth,
            left: rangeLeft,
          }}
        />
      </S.Slider>
      <S.InputGroup>
        <S.Input
          type="number"
          name={`${name}.min`}
          step={step}
          min={min}
          max={state.max}
          value={state.min}
          onChange={handleChange("min")}
          required
        />

        <S.Input
          type="number"
          name={`${name}.max`}
          step={step}
          min={state.min}
          max={max}
          value={state.max}
          onChange={handleChange("max")}
          required
        />
      </S.InputGroup>
    </S.Wrapper>
  );
};

export default MultiSlider;
