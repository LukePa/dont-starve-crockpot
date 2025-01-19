import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Unagi extends Recipe {
    name = "Unagi";
    priority = 20;
    image = image;

    requiredIngredients = [[IngredientName.Eel, IngredientName.CookedEel], [IngredientName.Lichen]]
}