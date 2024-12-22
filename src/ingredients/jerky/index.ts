import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const jerky: IIngredient = {
    name: IngredientName.Jerky,
    image,
    meat: 1,
}

export default jerky;