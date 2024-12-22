import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const rawFish: IIngredient = {
    name: IngredientName.RawFish,
    image,
    meat: 0.5,
    fish: 1,
}

export default rawFish;