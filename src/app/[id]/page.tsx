import BeerDetail from "@/components/BeerDetail";
import { useGetBeer } from "@/hook/useBeer";

interface Props {
  params: { id: string };
}

export default async function Campaign({ params: { id } }: Props) {
  const { data } = await useGetBeer(id);

  return <BeerDetail {...data} />;
}
