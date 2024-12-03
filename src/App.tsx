import { useFetchCocktails } from "@hooks/useFetchCocktails";

export const App = () => {
    const { data, error, isLoading } = useFetchCocktails({ isAlcoholic: true });
    console.log("data", data);
    console.log("error", error);
    console.log("isLoading", isLoading);
    return (
        <div>
            <h1>Cocktails</h1>
        </div>
    );
};
