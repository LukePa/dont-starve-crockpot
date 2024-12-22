import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedLimpets: IIngredient = {
    name: IngredientName.CookedLimpets,
    image,
    fish: 0.5,
}

export default cookedLimpets;