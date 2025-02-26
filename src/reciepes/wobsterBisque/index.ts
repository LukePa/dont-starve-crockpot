import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class WobsterBisque extends Recipe {
    name = "Wobster Bisque";
    priority = 30;
    image = image;

    requiredIngredients = [[IngredientName.Wobster], [IngredientName.Ice]]
}