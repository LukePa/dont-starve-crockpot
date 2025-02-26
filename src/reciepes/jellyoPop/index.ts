import Recipe from "../../classes/recipe";
import { IngredientName, inedibleNames } from "../../models/ingredientName";
import image from "./image.webp";

export class JellyoPop extends Recipe {
    name = "Jelly-O Pop";
    priority = 20;
    image = image;

    requiredIngredients = [
        [IngredientName.Ice], 
        inedibleNames, 
        [IngredientName.Jellyfish, IngredientName.DeadJellyfish, IngredientName.DriedJellyfish, IngredientName.CookedJellyfish]
    ]
}