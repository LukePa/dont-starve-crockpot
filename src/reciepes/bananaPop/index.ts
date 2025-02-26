import Recipe from "../../classes/recipe";
import { IngredientName, inedibleNames } from "../../models/ingredientName";
import image from "./image.webp";

export class BananaPop extends Recipe {
    name = "Banana Pop";
    priority = 20;
    image = image;

    maxmeat = 0;
    maxfish = 0;

    requiredIngredients = [[IngredientName.Banana], [IngredientName.Ice], inedibleNames]
}