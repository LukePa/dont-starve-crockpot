import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class FroggleBunwich extends Recipe {
    name = "Froggle Bunwich";
    priority = 1;
    image = image;
    minvegetables = 0.5;
    requiredIngredients = [[IngredientName.FrogLegs, IngredientName.CookedFrogLegs]];
}