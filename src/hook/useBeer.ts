import { IBeer } from "@/types/beer";

export const useGetBeerList = async () => {
  const data: IBeer[] = await fetch(`https://api.punkapi.com/v2/beers`, {
    cache: "force-cache",
  })
    .then((r) => r.json())
    .catch(() => []);

  return { data };
};

export const useGetBeer = async (id: string) => {
  const data: IBeer | IBeer[] = await fetch(
    `https://api.punkapi.com/v2/beers/` + id,
    {
      cache: "force-cache",
    },
  )
    .then((r) => r.json())
    .catch(() => ({}));

  return { data: Array.isArray(data) ? data[0] : data };
};
