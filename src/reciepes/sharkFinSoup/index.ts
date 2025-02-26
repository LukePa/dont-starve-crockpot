import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class SharkFinSoup extends Recipe {
    name = "Shark Fin Soup";
    priority = 20;
    image = image;

    requiredIngredients = [[IngredientName.SharkFin]];
}