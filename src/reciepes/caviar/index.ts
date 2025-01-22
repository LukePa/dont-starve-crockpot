import Recipe from "../../classes/recipe";
import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Caviar extends Recipe {
    name = "Caviar";
    priority = 20;
    image = image;

    minvegetables = 1;

    fitsIngredients(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient) {
        let sumRoe = 0;
        let sumCookedRoe = 0;

        [ingredientOne, ingredientTwo, ingredientThree, ingredientFour].forEach(ing => {
            if (ing.name === IngredientName.Roe) sumRoe += 1;
            else if (ing.name === IngredientName.CookedRoe) sumCookedRoe += 1;
        })

        if (sumRoe < 1 && sumCookedRoe < 3) return false;

        return this.checkFitsValuesVeg(ingredientOne, ingredientTwo, ingredientThree, ingredientFour);
    }
}