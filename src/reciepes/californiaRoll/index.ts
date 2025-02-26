import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class CaliforniaRoll extends Recipe {
    name = "California Roll";
    priority = 20;
    image = image;

    minfish = 1;

    requiredIngredients = [[IngredientName.Seaweed], [IngredientName.Seaweed]];
}