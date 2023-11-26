import BeerGrid from "@/components/BeerGrid";
import { useGetBeerList } from "@/hook/useBeer";

export default async function App() {
  const { data } = await useGetBeerList();

  return <BeerGrid data={data} />;
}
