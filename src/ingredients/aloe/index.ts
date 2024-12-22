import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const aloe: IIngredient = {
    name: IngredientName.Aloe,
    image,
    vegetables: 1,
}

export default aloe;