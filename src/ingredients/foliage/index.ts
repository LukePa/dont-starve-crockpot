import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const foliage: IIngredient = {
    name: IngredientName.Foliage,
    image,
}

export default foliage;