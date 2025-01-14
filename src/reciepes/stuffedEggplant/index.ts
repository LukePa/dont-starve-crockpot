import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class StuffedEggplant extends Recipe {
    name = "Stuffed Eggplant";
    priority = 1;
    image = image;

    minvegetables = 0.5;
    requiredIngredients = [[IngredientName.Eggplant, IngredientName.CookedEggplant]];
}