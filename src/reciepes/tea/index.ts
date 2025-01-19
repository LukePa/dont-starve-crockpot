import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Tea extends Recipe {
    name = "Tea";
    image = image;
    priority = 25;

    allowInedible = false;
    maxmeat = 0;
    maxvegetables = 0;
    restrictedIngredients = [IngredientName.Ice];

    minsweeteners = 1;
    requiredIngredients = [[IngredientName.Piko], [IngredientName.Piko]];
}