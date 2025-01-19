import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class GummyCake extends Recipe {
    name = "Gummy Cake";
    image = image;
    priority = 1;

    maxmeat = 0;
    minsweetener = 1;

    requiredIngredients = [[IngredientName.GummySlug]];
}