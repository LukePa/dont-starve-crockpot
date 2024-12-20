import type { IngredientName } from "./ingredientName";

export interface IIngredient {
    name: IngredientName;
    image: string;
    meat?: number;
    fish?: number;
    egg?: number;
    fruit?: number;
    vegetables?: number;
    sweeteners?: number;
    monster?: number;
    dairy?: number;
    bug?: number;
}