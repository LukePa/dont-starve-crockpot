import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Waffles extends Recipe {
    name = "Waffles";
    priority = 10;
    image = image;

    minegg = 1;
    requiredIngredients = [[IngredientName.Butter], [IngredientName.Berries, IngredientName.CookedBerries]]
}