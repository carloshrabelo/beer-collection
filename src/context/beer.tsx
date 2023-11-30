"use client";
import React, { useState, useEffect, createContext, ReactNode } from "react";

import { IBeer } from "@/types/beer";

export interface BeerProps {
  data: IBeer[];
}

export const BeerContext = createContext<BeerProps>({} as BeerProps);

export function BeerProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<IBeer[]>([]);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`, {
      cache: "force-cache",
    })
      .then((r) => r.json())
      .then(setData);
  }, []);
  return (
    <BeerContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </BeerContext.Provider>
  );
}
