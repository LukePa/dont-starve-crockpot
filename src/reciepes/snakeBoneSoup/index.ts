import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class SnakeBoneSoup extends Recipe {
    name = "Snake Bone Soup";
    image = image;
    priority = 20;

    minmeat = 2;
    requiredIngredients = [[IngredientName.SnakeBone], [IngredientName.SnakeBone]]
}