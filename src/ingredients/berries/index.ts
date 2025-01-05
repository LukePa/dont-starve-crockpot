import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const berries: IIngredient = {
    name: IngredientName.Berries,
    image,
    fruit: 0.5,
}

export default berries;