import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class MandrakeSoup extends Recipe {
    name = "Mandrake Soup";
    priority = 10;
    image = image;

    requiredIngredients = [[IngredientName.Mandrake]]
}