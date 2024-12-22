import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const frogLegs: IIngredient = {
    name: IngredientName.FrogLegs,
    image,
    meat: 0.5,
}

export default frogLegs;