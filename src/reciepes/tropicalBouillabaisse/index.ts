import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class TropicalBouillabaisse extends Recipe {
    name = "Tropical Bouillabaisse";
    priority = 35;
    image = image;

    minvegetables = 1;

    requiredIngredients = [
        [IngredientName.PurpleGrouper, IngredientName.CookedPurpleGrouper], 
        [IngredientName.PierrotFish, IngredientName.CookedPierrotFish], 
        [IngredientName.NeonQuattro, IngredientName.CookedNeonQuattro]
    ];
}