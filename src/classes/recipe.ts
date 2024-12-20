import type { IIngredient } from "../models/ingredient";
import type { IReciepe } from "../models/recipe";

export class Recipe {

    constructor(recipe: IReciepe) {

    }

    fitsIngredients(ingredentOne: IIngredient, ingredientTwo: IIngredient, ingredentThree: IIngredient, ingredientFour: IIngredient): boolean {
        return false;
    }
}