import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Coffee extends Recipe {
    name = "Coffee";
    priority = 30;
    image = image;

    requiredIngredients = [[IngredientName.CoffeeBeans], [IngredientName.CoffeeBeans], [IngredientName.CoffeeBeans]];

    maxmeat = 0;
    maxvegetables = 0;
    maxfruit = 0;
    maxmonster = 0;
    maxegg = 0;
    maxbug = 0;

    allowInedible = false;
}