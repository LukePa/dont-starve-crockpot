import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Kabobs extends Recipe {
    name = "Kabobs";
    priority = 5;
    image = image;
    minmeat = 0.01;
    maxmonster = 1;
    requiredIngredients = [[IngredientName.Twigs]];
    allowInedible = false;
}