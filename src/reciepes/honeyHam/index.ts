import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class HoneyHam extends Recipe {
    name = "Honey Ham";
    priority = 2;
    image = image;
    minmeat = 1.51;
    maxmonster = 1;
    requiredIngredients = [[IngredientName.Honey]];
    allowInedible = false;
}