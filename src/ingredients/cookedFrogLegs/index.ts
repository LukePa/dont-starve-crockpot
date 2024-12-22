import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedFrogLegs: IIngredient = {
    name: IngredientName.CookedFrogLegs,
    image,
    meat: 0.5,
}

export default cookedFrogLegs;