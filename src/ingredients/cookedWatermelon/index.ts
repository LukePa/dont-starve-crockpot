import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedWatermelon: IIngredient = {
    name: IngredientName.CookedWatermelon,
    image,
    fruit: 1,
}

export default cookedWatermelon;