import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedPierrotFish: IIngredient = {
    name: IngredientName.CookedPierrotFish,
    image,
    meat: 0.5,
    fish: 1,
}

export default cookedPierrotFish;