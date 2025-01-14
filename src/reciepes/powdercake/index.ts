import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Powdercake extends Recipe {
    name = "Powdercake";
    priority = 10;
    image = image;

    requiredIngredients = [[IngredientName.Honey], [IngredientName.Twigs], [IngredientName.Corn, IngredientName.Popcorn]];
}