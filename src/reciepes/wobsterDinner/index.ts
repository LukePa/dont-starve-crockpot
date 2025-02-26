import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class WobsterDinner extends Recipe {
    name = "Wobster Dinner";
    priority = 25;
    image = image;

    maxmeat = 0;
    restrictedIngredients = [IngredientName.Ice]
    requiredIngredients = [[IngredientName.Wobster], [IngredientName.Butter]]
}