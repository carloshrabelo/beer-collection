"use client";

import { LuCalendar } from "react-icons/lu";

import { IBeer } from "@/types/beer";

import * as S from "./style";
import Table from "./Table";

interface Props extends Omit<IBeer, "name"> {
  name?: string;
  className?: string;
}

export default function BeerDetail({
  image_url,
  name,
  ingredients: { hops, malt, yeast },
  method: { fermentation, mash_temp, twist },
  food_pairing,

  first_brewed,
  description,
  brewers_tips,
  attenuation_level,
  volume,
  boil_volume,
  contributed_by,

  ...beer
}: Props) {
  return (
    <S.Wrapper>
      <S.Title>{name}</S.Title>
      <S.Body>
        <S.ImageWraper>
          <S.Image src={image_url} alt="Beer" fill />
        </S.ImageWraper>
        <S.Content>
          <S.Row>
            <LuCalendar /> First Brewed {first_brewed}
          </S.Row>
          <div> {yeast}</div>
          <div>{description}</div>
          <hr />
          <div>{brewers_tips}</div>
          <S.Row>
            <S.BigNumber title="Attenuation Level">
              {attenuation_level}
            </S.BigNumber>
            <S.BigNumber title="Volume">
              {volume.value} {volume.unit}
            </S.BigNumber>
            <S.BigNumber title="Boil volume">
              {boil_volume.value} {boil_volume.unit}
            </S.BigNumber>
          </S.Row>
          <div>Contributed by: {contributed_by}</div>
        </S.Content>
      </S.Body>
      <div>
        <h3>Method</h3>
        <ul>
          <li>
            Fermentation: {fermentation.temp.value} {fermentation.temp.unit}
          </li>
          {mash_temp.map(({ temp, duration }, key) => (
            <li key={key}>
              Mash Temp: {temp.value} {temp.unit} {duration || "N/A"} minutes
            </li>
          ))}

          {!twist ? null : <li>{twist}</li>}
        </ul>

        <h3>Food Pairing</h3>
        <ul>
          {food_pairing?.map((value, index) => {
            return !value ? null : <li key={index}>{value}</li>;
          })}
        </ul>

        <div>
          <h2>Ingredients</h2>
          <h3>Malt</h3>
          <S.Row>
            {malt.map((el, index) => (
              <S.BigNumber key={index} title={el.name}>
                {el.amount.value} <small>{el.amount.unit}</small>
              </S.BigNumber>
            ))}
          </S.Row>
          <h3>Hops</h3>
          <S.Row>
            {hops.map((hop, index) => (
              <S.BigNumber
                key={index}
                title={hop.name}
                sub={`${hop.add} ${hop.attribute}`}
              >
                {hop.amount.value} <small>{hop.amount.unit}</small>
              </S.BigNumber>
            ))}
          </S.Row>
        </div>
        <br />
        <Table {...beer} />
      </div>
    </S.Wrapper>
  );
}
