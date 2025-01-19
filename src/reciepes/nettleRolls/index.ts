import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class NettleRolls extends Recipe {
    name = "Nettle Rolls";
    image = image;
    priority = 0;

    requiredIngredients = [[IngredientName.Nettle], [IngredientName.Nettle], [IngredientName.Nettle]]
}