import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const butter: IIngredient = {
    name: IngredientName.Butter,
    image,
    dairy: 1
}

export default butter;