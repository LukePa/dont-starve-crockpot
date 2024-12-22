import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedSeaweed: IIngredient = {
    name: IngredientName.CookedSeaweed,
    image,
    vegetables: 1,
}

export default cookedSeaweed;