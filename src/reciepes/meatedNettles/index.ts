import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class MeatedNettles extends Recipe {
    name = "Meated Nettles";
    image = image;
    priority = 1;

    allowInedible = false;
    minmeat = 1;
    requiredIngredients = [[IngredientName.Nettle], [IngredientName.Nettle]];
}