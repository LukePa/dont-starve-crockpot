import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedBanana: IIngredient = {
    name: IngredientName.CookedBanana,
    image,
    fruit: 1,
}

export default cookedBanana;