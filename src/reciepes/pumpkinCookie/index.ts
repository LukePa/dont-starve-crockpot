import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class PumpkinCookie extends Recipe {
    name = "Pumpkin Cookie";
    priority = 10;
    image = image;

    minsweeteners = 2;
    requiredIngredients = [[IngredientName.Pumpkin, IngredientName.CookedPumpkin]]
}