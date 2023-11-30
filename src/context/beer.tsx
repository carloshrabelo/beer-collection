"use client";
import React, { useState, useEffect, createContext, ReactNode } from "react";

import { IBeer, IBeerForm } from "@/types/beer";
import getBase64String from "@/utils/getBase64String";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";

const STORAGE_KEY = "BEER_LIST";

interface BeerProviderProps {
  children: ReactNode;
}

export interface BeerProps {
  data: IBeer[];
  // eslint-disable-next-line no-unused-vars
  createBeer: (beer: IBeerForm) => Promise<void>;
}

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

  return (
    <BeerContext.Provider value={{ data, createBeer }}>
      {children}
    </BeerContext.Provider>
  );
}
