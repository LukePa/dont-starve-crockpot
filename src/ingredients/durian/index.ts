import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const durian: IIngredient = {
    name: IngredientName.Durian,
    image,
    fruit: 1,
    monster: 1
}

export default durian;