import type { IIngredient } from "../models/ingredient";
import type { IReciepe } from "../models/recipe";

export class Recipe {

    constructor(recipe: IReciepe) {
        console.log(recipe)
    }

    fitsIngredients(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        console.log(ingredientOne)
        console.log(ingredientTwo)
        console.log(ingredientThree)
        console.log(ingredientFour)
        return false;
    }
}