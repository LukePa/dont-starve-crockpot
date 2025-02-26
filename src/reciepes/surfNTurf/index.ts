import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class SurfNTurf extends Recipe {
    name = "Surf'n'Turf";
    priority = 30;
    image = image;

    minmeat = 2.5;
    minfish = 1.5;

    restrictedIngredients = [IngredientName.Ice];
}