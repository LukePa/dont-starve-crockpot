import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.png";

const tropicalFish: IIngredient = {
    name: IngredientName.TropicalFish,
    image,
    meat: 0.5,
    fish: 1,
}

export default tropicalFish;