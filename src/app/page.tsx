"use client";

import BeerGrid from "@/components/BeerGrid";
import { useBeerAPI } from "@/hook/useBeerAPI";

export default function App() {
  const { data } = useBeerAPI();

  return <BeerGrid data={data} />;
}
