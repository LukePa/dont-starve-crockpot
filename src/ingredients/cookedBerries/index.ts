import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedBerries: IIngredient = {
    name: IngredientName.CookedBerries,
    image,
    fruit: 0.5,
}

export default cookedBerries;