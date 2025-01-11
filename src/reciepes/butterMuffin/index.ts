import image from "./image.webp";
import Reciepe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import type { IIngredient } from "../../models/ingredient";

export default class ButterMuffin extends Reciepe {
    name = "Butter Muffin";
    priority = 1;
    image = image;
    maxmeat = 0.01;
    minvegetables = 0.5;
    requiredIngredients = [IngredientName.ButterflyWings]

    constructor() {
        super();
    }

}
