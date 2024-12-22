import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const radish: IIngredient = {
    name: IngredientName.Radish,
    image,
    vegetables: 1,
}

export default radish;