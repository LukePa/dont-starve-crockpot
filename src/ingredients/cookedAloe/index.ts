import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedAloe: IIngredient = {
    name: IngredientName.CookedAloe,
    image,
    vegetables: 1,
}

export default cookedAloe;