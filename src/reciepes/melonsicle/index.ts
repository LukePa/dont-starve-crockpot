import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Melonsicle extends Recipe {
    name = "Melonsicle";
    priority = 10;
    image = image;

    requiredIngredients = [[IngredientName.Watermelon], [IngredientName.Ice], [IngredientName.Twigs]]
    maxmeat = 0;
    maxegg = 0;
    maxvegetables = 0;
}