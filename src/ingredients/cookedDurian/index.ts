import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedDurian: IIngredient = {
    name: IngredientName.CookedDurian,
    image,
    fruit: 1,
    monster: 1
}

export default cookedDurian;