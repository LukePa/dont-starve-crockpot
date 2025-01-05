import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const ice: IIngredient = {
    name: IngredientName.Ice,
    image,
}

export default ice;