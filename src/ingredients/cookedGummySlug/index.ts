import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedGummySlug: IIngredient = {
    name: IngredientName.CookedGummySlug,
    image,
    bug: 1,
}

export default cookedGummySlug;