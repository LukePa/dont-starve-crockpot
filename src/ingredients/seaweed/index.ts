import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const seaweed: IIngredient = {
    name: IngredientName.Seaweed,
    image,
    vegetables: 1,
}

export default seaweed;