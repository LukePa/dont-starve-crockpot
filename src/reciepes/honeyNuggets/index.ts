import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class HoneyNuggets extends Recipe {
    name = "Honey Nuggets";
    priority = 2;
    image = image;
    minmeat = 0.01;
    maxmonster = 1.5;
    requiredIngredients = [[IngredientName.Honey]];
    allowInedible = false;
}