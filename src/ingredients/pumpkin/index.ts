import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const pumpkin: IIngredient = {
    name: IngredientName.Pumpkin,
    image,
    vegetables: 1,
}

export default pumpkin;