import { AlcoholicAndNonAlcoholicProps } from '@typings/endpointTypes/endpoints';

const alcoholicAndNonAlcoholic = ({ isAlcoholic }: AlcoholicAndNonAlcoholicProps) =>
    `filter.php?a=${isAlcoholic ? 'Alcoholic' : 'Non_Alcoholic'}`;

export const endpoints = {
    getAlcoholicAndNonAlcoholicCocktails: (params: AlcoholicAndNonAlcoholicProps) =>
        `https://www.thecocktaildb.com/api/json/v1/1/${alcoholicAndNonAlcoholic(params)}`,
}
