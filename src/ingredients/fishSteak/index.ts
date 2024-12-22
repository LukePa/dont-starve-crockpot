import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const fishSteak: IIngredient = {
    name: IngredientName.FishSteak,
    image,
    meat: 0.5,
    fish: 1,
}

export default fishSteak;