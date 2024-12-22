import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedPumpkin: IIngredient = {
    name: IngredientName.CookedPumpkin,
    image,
    vegetables: 1,
}

export default cookedPumpkin;