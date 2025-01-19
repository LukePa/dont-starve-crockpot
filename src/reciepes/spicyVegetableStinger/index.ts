import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class SpicyVegetableStinger extends Recipe {
    name = "Spicy Vegetable Stinger";
    image = image;
    priority = 15;

    minvegetable = 1.5;
    requiredIngredients = [
        [IngredientName.Ice], 
        [IngredientName.Radish, IngredientName.CookedRadish, IngredientName.Asparagus, IngredientName.CookedAsparagus]
    ];
}