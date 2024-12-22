import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedDrumstick: IIngredient = {
    name: IngredientName.CookedDrumstick,
    image,
    meat: 0.5,
}

export default cookedDrumstick;