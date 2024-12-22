import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedMeat: IIngredient = {
    name: IngredientName.CookedMeat,
    image,
    meat: 1,
}

export default cookedMeat;