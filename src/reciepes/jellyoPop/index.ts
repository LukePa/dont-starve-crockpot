import Recipe from "../../classes/recipe";
import type { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class JellyoPop extends Recipe {
    name = "Jelly-O Pop";
    priority = 20;
    image = image;

    requiredIngredients = [[]]
}