import { useFetchCocktails } from "@hooks/useFetchCocktails";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { Loader } from "@elements/loader/Loader";
import { Switch } from "@elements/switch/Switch";

export const App = () => {
  const { data, error, isLoading } = useFetchCocktails({ isAlcoholic: true });
  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  return (
    <DefaultLayout>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column', height: '100vh', gap: '20px' }}>
        {!isLoading && <Loader />}
        <Switch />
      </div>
    </DefaultLayout>
  );
};
