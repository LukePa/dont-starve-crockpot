import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedAsparagus: IIngredient = {
    name: IngredientName.CookedAsparagus,
    image,
    vegetables: 1,
}

export default cookedAsparagus;