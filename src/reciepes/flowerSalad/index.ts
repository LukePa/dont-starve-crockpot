import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";


export class FlowerSalad extends Recipe {
    name = "Flower Salad";
    priority = 10;
    image = image;
    maxfruit = 0;
    mmaxmeat = 0;
    maxegg = 0;
    maxsweeteners = 0;
    minvegetables = 1.5;
    allowInedible = false;

    requiredIngredients = [[IngredientName.CactusFlower]];
}