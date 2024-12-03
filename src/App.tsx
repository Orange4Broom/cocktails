import { useFetchCocktails } from "@hooks/useFetchCocktails";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { useState } from "react";

export const App = () => {
  const { data, error, isLoading } = useFetchCocktails({ isAlcoholic: true });
  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  const [searchedValue, setSearchedValue] = useState<string>('');
  return (
    <DefaultLayout searchedValue={searchedValue} setSearchedValue={setSearchedValue}>
      <h1>Cocktails</h1>
    </DefaultLayout>
  );
};
