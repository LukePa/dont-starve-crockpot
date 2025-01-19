import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class IcedTea extends Recipe {
    name = "Iced Tea";
    priority = 30;
    image = image;

    minsweeteners = 1;
    requiredIngredients = [[IngredientName.Ice], [IngredientName.Piko], [IngredientName.Piko]]
}