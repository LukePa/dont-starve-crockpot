import type { IngredientName } from "./ingredientName";

export interface IReciepe {
    name: string;
    image: string;
    priority: number;
    minmeat?: number;
    maxmeat?: number;
    minfish?: number;
    maxfish?: number;
    minegg?: number;
    maxegg?: number;
    minfruit?: number;
    maxfruit?: number;
    minvegetables?: number;
    maxvegetables?: number;
    minsweeteners?: number;
    maxsweeteners?: number;
    minmonster?: number;
    maxmonster?: number;
    mindairy?: number;
    maxdairy?: number;
    minbug?: number;
    maxbug?: number;
    requiredIngredients?: Array<IngredientName>
    restrictedIngredients?: Array<IngredientName>
}