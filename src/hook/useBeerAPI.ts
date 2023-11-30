"use client";

import { useContext } from "react";

import { BeerContext } from "@/context/beer";

export function useBeerAPI() {
  const context = useContext(BeerContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
