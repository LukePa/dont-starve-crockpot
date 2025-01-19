import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class AsparagusSoup extends Recipe {
    name = "Asparagus Soup";
    image = image;
    priority = 10;

    minvegetables = 0.5;
    requiredIngredients = [[IngredientName.Asparagus, IngredientName.CookedAsparagus]];
}