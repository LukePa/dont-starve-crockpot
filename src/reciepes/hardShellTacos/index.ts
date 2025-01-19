import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class HardShellTacos extends Recipe {
    name = "Hard Shell Tacos";
    priority = 1;
    image = image;

    minvegetables = 0.5;
    requiredIngredients = [[IngredientName.WeevoleCarapace], [IngredientName.WeevoleCarapace]];
}