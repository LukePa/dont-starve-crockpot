import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedRadish: IIngredient = {
    name: IngredientName.CookedRadish,
    image,
    vegetables: 1,
}

export default cookedRadish;