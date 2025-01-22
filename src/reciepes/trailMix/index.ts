import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class TrailMix extends Recipe {
    name = "Trail Mix";
    priority = 10;
    image = image;

    requiredIngredients = [[IngredientName.RoastedBirchnut], [IngredientName.Berries]]
    minsweeteners = 0.5;

    maxmeat = 0;
    maxegg = 0;
    maxvegetables = 0;
    maxdairy = 0;
}