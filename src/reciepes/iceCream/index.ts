import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class IceCream extends Recipe {
    name = "Ice Cream";
    priority = 10;
    image = image;

    requiredIngredients = [[IngredientName.Ice]]
    mindairy = 1;
    minsweeteners = 1;

    maxmmeat = 0;
    maxegg = 0
    maxvegetables = 0;
    allowInedible = false;
}