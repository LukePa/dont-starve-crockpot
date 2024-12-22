import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const drumstick: IIngredient = {
    name: IngredientName.Drumstick,
    image,
    meat: 0.5,
}

export default drumstick;