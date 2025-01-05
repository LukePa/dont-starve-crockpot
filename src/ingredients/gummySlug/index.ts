import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const gummySlug: IIngredient = {
    name: IngredientName.GummySlug,
    image,
    bug: 1,
}

export default gummySlug;