import { useFetchCocktails } from "@hooks/useFetchCocktails";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { Loader } from "@elements/loader/Loader";

export const App = () => {
  const { data, error, isLoading } = useFetchCocktails({ isAlcoholic: true });
  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  return (
    <DefaultLayout>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column', height: '100vh' }}>
        {!isLoading && (
          <>
            <Loader /> <h1>Loading Cocktails...</h1>
          </>
        )}

      </div>
    </DefaultLayout>
  );
};
