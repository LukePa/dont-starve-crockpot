import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class SteamedHamSandwich extends Recipe {
    name = "Steamed Ham Sandwich";
    image = image;
    priority = 5;

    minvegetables = 1;
    maxmonster = 0;

    requiredIngredients = [[IngredientName.Foliage], [IngredientName.Meat, IngredientName.CookedMeat]];
}