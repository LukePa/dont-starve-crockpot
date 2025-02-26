import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Ceviche extends Recipe {
    name = "Ceviche";
    priority = 20;
    image = image;

    minfish = 2;

    requiredIngredients = [[IngredientName.Ice]]
}