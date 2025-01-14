import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Dragonpie extends Recipe {
    name = "Dragonpie";
    priority = 1;
    image = image;
    maxmeat = 0;
    requiredIngredients = [[IngredientName.DragonFruit, IngredientName.CookedDragonFruit]]
}