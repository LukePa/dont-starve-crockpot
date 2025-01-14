import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class FishTacos extends Recipe {
    name = "Fish Tacos";
    image = image;
    priority = 10;
    minfish = 0.5;
    requiredIngredients = [[IngredientName.Corn, IngredientName.Popcorn]]
}