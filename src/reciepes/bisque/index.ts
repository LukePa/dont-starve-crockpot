import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Bisque extends Recipe {
    name = "Bisque";
    priority = 30;
    image = image;

    requiredIngredients = [[IngredientName.Limpets], [IngredientName.Limpets], [IngredientName.Limpets], [IngredientName.Ice]];
}