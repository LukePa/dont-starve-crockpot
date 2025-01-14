import Recipe from "../../classes/recipe";
import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class TurkeyDinner extends Recipe {
    name = "Turkey Dinner";
    priority = 10;
    image = image;

    requiredIngredients = [[IngredientName.Drumstick, IngredientName.CookedDrumstick], [IngredientName.Drumstick, IngredientName.CookedDrumstick]]
    minmeat = 0.01;
    minvegetables = 0.5;
    minfruit = 0.5;

    fitsIngredients(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (!this.checkFitsRequiredIngredients(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsValuesMeat(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (
            !this.checkFitsValuesFruit(ingredientOne, ingredientTwo, ingredientThree, ingredientFour) &&
            !this.checkFitsValuesVeg(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)
        ) return false;

        return true;
    }
}