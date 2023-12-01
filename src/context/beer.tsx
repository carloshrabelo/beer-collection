"use client";
import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  ReactNode,
} from "react";

import { IBeer, IBeerForm } from "@/types/beer";
import formatMonthDate from "@/utils/formatMonthDate";
import getBase64String from "@/utils/getBase64String";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";

const STORAGE_KEY = "BEER_LIST";

interface BeerProviderProps {
  children: ReactNode;
}

interface IFilterValue {
  min: number;
  max: number;
}

export interface IFilter {
  attenuation_level?: IFilterValue;
  volume?: IFilterValue;
  boil_volume?: IFilterValue;
  name?: string;
  first_brewed_start?: string;
  first_brewed_end?: string;
}

export interface BeerProps {
  data: IBeer[];
  // eslint-disable-next-line no-unused-vars
  createBeer: (beer: IBeerForm) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  setFilter: (beer: IFilter) => void;
}

const filterFunction: Record<keyof IFilter, any> = {
  attenuation_level: (value: IFilter["attenuation_level"]) => (item: IBeer) =>
    value &&
    value?.max >= item.attenuation_level &&
    item.attenuation_level >= value?.min,
  volume: (value: IFilter["volume"]) => (item: IBeer) =>
    value && value?.max >= item.volume.value && item.volume.value >= value?.min,
  boil_volume: (value: IFilter["boil_volume"]) => (item: IBeer) =>
    value &&
    value?.max >= item.boil_volume.value &&
    item.boil_volume.value >= value?.min,
  name: (value: IFilter["name"]) => (item: IBeer) =>
    item.name?.toLowerCase().includes(value?.toLowerCase() || ""),
  first_brewed_start:
    (value: IFilter["first_brewed_start"]) => (item: IBeer) => {
      if (!value) return true;
      return new Date(value) <= new Date(formatMonthDate(item.first_brewed)); //depois
    },
  first_brewed_end: (value: IFilter["first_brewed_end"]) => (item: IBeer) => {
    if (!value) return true;
    return new Date(value) >= new Date(formatMonthDate(item.first_brewed)); //depois
  },
};

export const BeerContext = createContext<BeerProps>({} as BeerProps);

const fetchBeerData = (): Promise<IBeer[]> =>
  fetch(`https://api.punkapi.com/v2/beers`, {
    cache: "force-cache",
  })
    .then((response) => response.json())
    .then((data) => {
      setLocalStorageItem(STORAGE_KEY, data);
      return data;
    });

const parserForm = async (data: IBeerForm): Promise<IBeer> => {
  const image_url =
    typeof data.image_url === "string"
      ? data.image_url
      : await getBase64String(data.image_url[0]);
  const first_brewed =
    typeof data.first_brewed === "string"
      ? data.first_brewed
      : new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
        }).format(data.first_brewed);

  return {
    ...data,
    first_brewed,
    image_url,
  };
};

export function BeerProvider({ children }: BeerProviderProps) {
  const [data, setBeerList] = useState<IBeer[]>([]);
  const [filter, setFilter] = useState<IFilter>({} as IFilter);

  useEffect(() => {
    const storedData = getLocalStorageItem(STORAGE_KEY) || [];
    if (storedData.length) return setBeerList(storedData);
    fetchBeerData().then(setBeerList);
  }, []);

  const createBeer: BeerProps["createBeer"] = async (beer) => {
    const item = await parserForm(beer);
    setBeerList((prevData) => {
      const beerList = [...prevData, { ...item, id: prevData.length + 1 }];
      setLocalStorageItem(STORAGE_KEY, beerList);
      return beerList;
    });
  };

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        Object.entries(filter).every(([key, value]) =>
          filterFunction[key as keyof IFilter](value)(item),
        ),
      ),
    [data, filter],
  );

  return (
    <BeerContext.Provider value={{ data: filteredData, createBeer, setFilter }}>
      {children}
    </BeerContext.Provider>
  );
}
