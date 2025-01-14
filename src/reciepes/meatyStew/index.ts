import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class MeatyStew extends Recipe {
    name = "Meaty Stew";
    priority = 0;
    image = image;

    minmeat = 3;
    maxegg = 0;
    allowInedible = false;
    restrictedIngredients = [IngredientName.Mandrake];
}