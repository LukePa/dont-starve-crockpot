import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedEel: IIngredient = {
    name: IngredientName.CookedEel,
    image,
    meat: 0.5,
    fish: 1,
}

export default cookedEel;