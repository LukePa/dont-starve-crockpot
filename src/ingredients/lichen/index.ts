import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const lichen: IIngredient = {
    name: IngredientName.Lichen,
    image,
    vegetables: 1,
}

export default lichen;