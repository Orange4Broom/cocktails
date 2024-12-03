import { useFetchCocktails } from "@hooks/useFetchCocktails";
import { DefaultLayout } from "@layouts/DefaultLayout";

export const App = () => {
  const { data, error, isLoading } = useFetchCocktails({ isAlcoholic: true });
  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  return (
    <DefaultLayout>
      <h1>Cocktails</h1>
    </DefaultLayout>
  );
};
