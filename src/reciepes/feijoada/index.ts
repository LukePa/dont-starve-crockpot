import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Feijoada extends Recipe {
    name = "Feijoada";
    priority = 30;
    image = image;

    minmeat = 0.5;
    requiredIngredients = [[IngredientName.BeanBugs], [IngredientName.BeanBugs], [IngredientName.BeanBugs]];
}