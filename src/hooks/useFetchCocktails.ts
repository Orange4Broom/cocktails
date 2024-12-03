import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { endpoints } from '@/endpoints';
import { AlcoholicAndNonAlcoholicProps } from '@typings/endpointTypes/endpoints';

const fetchAlcoholicAndNonAlcoholicCocktails = async (isAlcoholic: AlcoholicAndNonAlcoholicProps) => {
  const response = await axios.get(endpoints.getAlcoholicAndNonAlcoholicCocktails(isAlcoholic));
  return response.data.drinks;
};

export const useFetchCocktails = (isAlcoholic: AlcoholicAndNonAlcoholicProps) => {
  return useQuery({
    queryKey: ['alcoholicAndNonAlcoholic', isAlcoholic],
    queryFn: () => fetchAlcoholicAndNonAlcoholicCocktails(isAlcoholic),
    refetchOnWindowFocus: false,
  });
};
